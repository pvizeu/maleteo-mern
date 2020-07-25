import React, {useEffect, useRef, useState, useCallback} from "react";
import './SearchComponent.scss';
import {GoogleMap, useLoadScript, Marker, InfoWindow,} from '@react-google-maps/api';  //libreira mas completa
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
import { getDistance } from 'geolib';


// Fetcher es una funcion que recibe la clave y devuelve una promesa con los datos a cargar en Json

//  Se necesita este componente para pasarle la ubicacion como props al google-reactt-map
//const Marker = ({children}) => children;
const libraries =["places"];  //to avoid re-render
const resolution = 16; 
const mapContainerStyle ={width:'100vw', height: '100vh'}
const options={
  styles:mapStyles ,     //snazzy maps
  disableDefaultUI: true,  //quitar algunas de las opciones
  zoomControl:false
}


export function SearchComponent({espacios,onPosition}) {


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
    lat: (latitude ? latitude : 40.415383),
    lng: (longitude ? longitude : -3.707189)
  };
  
 
  
  // se setea el zoom por defecto a 10
  // y se setea bounds como null porque aun no sabemos la zona a buscar
  const [ zoom, setZoom ] = useState(resolution);
  const [coordEle,setCoordEle]=useState(center);
  
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
  //console.log("apikey",process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  // Se tiene que utilizar useRef porque este valor no puede cambiar al renderizar el componente, esta es la llamada a google Maps sin utilizar la libreria para agregar funcionalidad a los grupos
  const mapRef = useRef();
  const onMapLoad = useCallback((map)=>{
    console.log("mapa cargado");
    mapRef.current=map;
    setZoom(map.getZoom());
    // setBounds([map.bounds.nw.lng,map.bounds.se.lat,map.bounds.se.lng,map.bounds.nw.lat]);
  },[])
  //haciendolos el centro del mapa en el evento que ha seleccionado
  const panTo = useCallback(({ lat, lng }) => {
    console.log("panto",lat,lng,"zoom",mapRef.current.getZoom());
    mapRef.current.panTo({ lat, lng });
    setZoom(mapRef.current.getZoom());
    setCoordEle({lat:lat,lng:lng});
    console.log("coordEle en panto",coordEle);
    onPosition({lat:lat,lng:lng});
  }, []);
  const onZoomChanged = React.useCallback(() => {
    console.log("zoom",zoom);
  }, [zoom]);
  const distanceToSelected = React.useCallback((selected) => {
      let d=getDistance({latitude:coordEle.lat,longitude:coordEle.lng},{latitude:selected.latitud,longitude:selected.longitud})
    console.log("distancia km",d/1000);
    return d/1000;
  }, [coordEle]);


  if(loadError) return <div>"Error loading maps"</div>;
  if(!isLoaded) return <div>"Loading maps..."</div>

  return (
    <> 

    <div className="map">
      <Search panTo={panTo} className="input" latitude={center.latitude} longitude={center.longitude}/>
      <Locate panTo={panTo}/> 
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={zoom} 
                 center={center} 
                 options={options} 
                 onLoad={onMapLoad}
                 onChange={({zoom, bounds}) => {
                   console.log("zoom en googlemap",zoom);
                   setZoom(zoom);
                   setBounds([bounds.nw.lng,bounds.se.lat,bounds.se.lng,bounds.nw.lat]);
                  }}
                  onDblClick={(event)=>{console.log(event);panTo({lat:event.latLng.lat(),lng:event.latLng.lng()})}}
                  yesIWantToUseGoogleMapApiInternals
                  onZoomChanged={onZoomChanged()}
                  // onZoomChanged={(e)=>{console.login(e)}}
                  >

          {espacios.map((espacio) => {
            return(
              <Marker
                  key={espacio._id}
                  position={{lat:espacio.latitud,lng:espacio.longitud}}
                  title={espacio.Title}
                  icon={{url:"/place.png",
                          scaledSize: new window.google.maps.Size(30,30)}}
                  onClick={()=>{setSelected(espacio)}}
              />
            )
            })}
          {selected?(
            <InfoWindow position={{lat:selected.latitud,lng:selected.longitud}} onCloseClick={()=>setSelected()}>
              <div className="c-carrousel__item">
                <img src={selected.photos[0]} alt="/" className="c-carrousel__img"/>
                <div className="c-carrousel__details">
                    <p className="c-carrousel__title">{selected.title}</p>
                    <p className="c-carrousel__alias">{selected.alias}</p>
                        {/* foto de el guardian */}
                    <p className="c-carrousel__space">{selected.space}</p>
                    <p className="c-carrousel__ubicacion">a {distanceToSelected(selected).toFixed(2)} km </p>
                </div>
              </div>
            </InfoWindow>
          ) :null}
          <Marker
                  key="centromapa"
                  position={coordEle?coordEle:center}
                  icon={{url:"/center.png",
                          scaledSize: new window.google.maps.Size(30,30)}}
                  title={coordEle}
          />
        </GoogleMap>
        {/* <div>Icons made by
          <a href="https://www.flaticon.com/free-icon/place_1452563" title="Kiranshastry"> Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>*/}
        </div>
        </>
  );
}

  //**********************funcion para buscar una ubicacion y centrarse en ella***************************
  export function Search({ panTo ,latitude, longitude}) {
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
                          // window.location.replace(`/search/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${ address}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail=${useremail !== "" ? useremail : ""}`)
                  }}
                  className="search-container">
          <ComboboxInput value={value} onChange={(e)=>{setValue(e.target.value);}} disable={!ready} placeholder="Direccion cercana" className="search-input"/>
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

//*******************+Indica aproximadamente donde encuentras por el browser ***************************++*/
export function Locate({panTo}){
  return <button className="locate" onClick={()=>{
    navigator.geolocation.getCurrentPosition((position)=>{panTo({lat:position.coords.latitude,lng:position.coords.longitude})},()=>null);
  }}><img src="/compass.png" alt="compass-locate me" height="20px" ></img></button>
}
