import React, {useEffect, useRef, useState, useCallback} from "react";
import axios from 'axios';
import './SearchComponent.scss';
import {GoogleMap, useLoadScript, Marker, InfoWindow,} from '@react-google-maps/api';  //libreira mas completa
import useSupercluster from "use-supercluster";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useLocation } from "react-router-dom";
import mapStyles from "./mapStyles";


// Fetcher es una funcion que recibe la clave y devuelve una promesa con los datos a cargar en Json

//  Se necesita este componente para pasarle la ubicacion como props al google-reactt-map
//const Marker = ({children}) => children;
const libraries =["places"];  //to avoid re-render
const resolution = 16; 
const options={
  styles:mapStyles ,     //snazzy maps
  disableDefaultUI: true,  //quitar algunas de las opciones
  zoomControl:true
}

export function SearchComponent() {


  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query= useQuery();


   //parametros de la url recogidos con query buscando la clave
   let latitude = query.get("latitude");
   let longitude = query.get("longitude");
   let useremail = query.get("useremail");

   //convirtiendolos en float
   latitude = parseFloat(latitude)
   longitude = parseFloat(longitude)

   const center = {
    lat: (latitude ? latitude : 40.425310),
    lng: (longitude ? longitude : -3.690458)
  };
  
 
  
  // se setea el zoom por defecto a 10
  // y se setea bounds como null porque aun no sabemos la zona a buscar
  const [ zoom, setZoom ] = useState(10);
  const [bounds, setBounds] = useState(null);
  const [localization, setLocalization] = useState(query.get("localization") ? query.get("localization") : "");
  const [deliver, setDeliver] = useState(query.get("deliver") ? query.get("deliver") : "");
  const [removal, setRemoval] = useState(query.get("removal") ? query.get("removal") : "");
  const [pieces, setPieces] = useState(query.get("pieces") ? query.get("pieces") : "");
  const [selected,setSelected]=useState(null);
  // 1) carga del mapa y las librerias con el hook
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
    libraries:libraries
  });
  // Se tiene que utilizar useRef porque este valor no puede cambiar al renderizar el componente, esta es la llamada a google Maps sin utilizar la libreria para agregar funcionalidad a los grupos
  const mapRef = useRef();
  const onMapLoad = useCallback((map)=>{
    mapRef.current=map;
  },[])
  //haciendolos el centro del mapa en el evento que ha seleccionado
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(resolution);
  }, []);
  

  // 2) load and format data
  const [puntos,setPuntos] = useState([]);
  
  //????????????????? esta cargado en la pagina
  useEffect(()=>{
    axios.get(process.env.REACT_APP_NODE_MALETEO+'spaces').then(res=>{
      console.log(res.data.data);
      setPuntos(res.data.data);
    })
  },[])


  // se hace un map para que devuelva un objeto que luego recibe el superCluster 
  // points = marcas
  const points = puntos.map(crime => ({
    "type": "Feature",
    "properties": {
      "cluster": false,
      "crimeId": crime.id,
      "title":crime.title,
      "property":crime.property,
      "space": crime.space
      //se pueden seguir pasando parametros
    },
    // Son las coordenadas de cada marca
    // se hace un parseFloat porque vienen como string de la api
    "geometry": { "type": "Point", "coordinates": [ parseFloat(crime.longitud), parseFloat(crime.latitud) ] }
  }));
  // 3) get clusters

  // radius es el tamaño de la zona a buscar grupos en pixeles
  // No se muestran grupos fuera de esta zona
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });
  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";
  console.log("maps");
  // 4) render map
  return (
    <> 
    <Search panTo={panTo} className="input" latitude={center.latitude} longitude={center.longitude}/>
    <Locate panTo={panTo}/> 
    <div className="map">
      <GoogleMap zoom={resolution} 
                 center={center} 
                 options={options} 
                 onLoad={onMapLoad}
                 onChange={({zoom, bounds}) => {
                   setZoom(zoom);
                   setBounds([bounds.nw.lng,bounds.se.lat,bounds.se.lng,bounds.nw.lat]);
                  }}>

          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;

            //entra en el objeto que devuelve SWR y verifica en la clave properties si es un cluster o no
            const { cluster: isCluster} = cluster.properties;

            // si es un cluster devuelve un grupo
            if (isCluster) {
              return (
                // este marker es el grupo de espacios
                <Marker
                  key={cluster.id}
                  lat={latitude}
                  lng={longitude}
                  title={cluster.properties.title}
                >
                  <div
                    className="cluster-marker"
                    //este style no se puede poner en css porque es dinamico, cambia el tamaño dependiendo de la cantidad de items dentro de el grupo
                    style={{
                      // el tamaño se define dependiendo de cuantos items hay en cada grupo
                      // 10 px + (el % que representa un grupo de entre todos los grupos / cantidad total de marcas a mostrar) * 30px
                      width: `${ 10 + ( cluster.properties.point_count / points.length ) * 30 }px`,
                      height: `${ 10 + ( cluster.properties.point_count / points.length ) * 30 }px`
                    }}
                    // esta es la funcionalidad para acercar cuando se da click sobre el grupo
                    onClick={ () => {
                      const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);
                      mapRef.current.setZoom(expansionZoom);
                      mapRef.current.panTo({ lat: latitude, lng: longitude });
                    }}
                  >
                    {cluster.properties.point_count}
                  </div>
                </Marker>
              );
            }
            else{
              return (
                <Marker
                  key={cluster.properties.crimeID}
                  lat={latitude}
                  lng={longitude}
                  title={cluster.properties.title}
                  onClick={()=>{setSelected(cluster)}}
                >
                {/* este es el icono a mostrar */}
                  <button className="place-pin">
                    <img src="/place.png" alt="place"/>
                  </button>
                </Marker>
              );

            }
            // si no es un grupo devuelve solo el icono 
            
          })}
          {selected?(
            <InfoWindow position={{lat:latitude,lng:longitude}} onCloseClick={()=>setSelected()}>
              <div>
                <p>{selected.properties.title}</p>
              </div>
            </InfoWindow>
          ) :null}


    
        </GoogleMap>
        {/* <div>Icons made by
          <a href="https://www.flaticon.com/free-icon/place_1452563" title="Kiranshastry"> Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>*/}
        </div>
        </>
  );

  //**********************funcion para buscar una ubicacion y centrarse en ella***************************
  function Search({ panTo ,latitude, longitude}) {
    const {ready, value,suggestions: { status, data },setValue,clearSuggestions,} = usePlacesAutocomplete({
                                                              requestOptions: {location: { lat: () => latitude, lng: () => longitude},
                                                              radius: 100 * 1000,           
                                                            },});                                                                                                                                                    
    return (
      //input donde buscas la ubicacion
      <div>
        <Combobox onSelect={async (address)=>{
                          setValue(address,false);
                          clearSuggestions();
                          try {
                            const results=await getGeocode({address});
                            const {lat,lng}=await getLatLng(results[0]);
                            panTo({lat,lng});
                          }catch(error){
                            console.log("error!");
                          }
                          window.location.replace(`/search/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${ address}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail=${useremail !== "" ? useremail : ""}`)
                  }}
                  className="search-container">
          <ComboboxInput value={value} onChange={(e)=>{setValue(e.target.value);}} disable={!ready} placeholder="Direccion cercana"/>
          {/* ComboboxPopover es la caja que almacena las sugerencias */}
          <ComboboxPopover>
            <ComboboxList>
              {/* si el status esta ok hace el map para mostrar la lista de sugerencias */}
              {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }
}
//*******************+Indica aproximadamente donde encuentras por el browser ***************************++*/
function Locate({panTo}){
  return <button className="locate" onClick={()=>{
    navigator.geolocation.getCurrentPosition((position)=>{panTo({lat:position.coords.latitude,lng:position.coords.longitude})},()=>null);
  }}><img src="/compass.png" alt="compass-locate me" height="20px" ></img></button>
}
