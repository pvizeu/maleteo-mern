import React, {useEffect, useRef, useState} from "react";
import axios from 'axios';
import './SearchComponent.scss';
import GoogleMapReact from 'google-map-react';
import credentials from "./credentials/credentials.js";
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
import {environment} from "../../../environments/environment";


// Fetcher es una funcion que recibe la clave y devuelve una promesa con los datos a cargar en Json

//  Se necesita este componente para pasarle la ubicacion como props al google-reactt-map
const Marker = ({children}) => children;


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
    lat: (latitude ? latitude : 40.4),
    lng: (longitude ? longitude : -3.7)
  };
  const resolution = 16; 
   //haciendolos el centro del mapa

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(resolution);
  }, []);

  // 1) map setup
  // se setea el zoom por defecto a 10
  // y se setea bounds como null porque aun no sabemos la zona a buscar
  const [ zoom, setZoom ] = useState(10);
  const [bounds, setBounds] = useState(null);
  const [localization, setLocalization] = useState(query.get("localization") ? query.get("localization") : "");
  const [deliver, setDeliver] = useState(query.get("deliver") ? query.get("deliver") : "");
  const [removal, setRemoval] = useState(query.get("removal") ? query.get("removal") : "");
  const [pieces, setPieces] = useState(query.get("pieces") ? query.get("pieces") : "");
  // Se tiene que utilizar useRef porque este valor no puede cambiar al renderizar el componente, esta es la llamada a google Maps sin utilizar la libreria para agregar funcionalidad a los grupos
  const mapRef = useRef();


  // 2) load and format data
  const [puntos,setPuntos] = useState([]);

  useEffect(()=>{
    axios.get(environment.url+'spaces').then(res=>{
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

  // 4) render map
  return (
    <> 
    <Search panTo={panTo} className="input" />
    <div className="map">
        <GoogleMapReact
          // Key
          bootstrapURLKeys={{ key: credentials.key }}
          // defaultCenter es el centro de el mapa
          // viene de el componente input
          defaultCenter={ center }
          //Zoom
          defaultZoom={resolution}
          // setea el zoom y los bordes del mapa a mostrar

          //recibe una funcion y esta recibe un objeto que serian zoom y bounds usando destructuring
          // zoom recibe un num que esta en el estado zoom
          //setBounds recibe un array de 4 numeros que define las esquinas de la zona a buscar, en el orden establecido por la documentacion de superCluster
          onChange={({zoom, bounds}) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat
            ]);
          }}
          //de aqui para abajo nos conectamos a googleMaps utilizando el useRef
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
          }}
        >

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
            // si no es un grupo devuelve solo el icono 
            return (
              <Marker
                key={cluster.properties.crimeID}
                lat={latitude}
                lng={longitude}
              >
              {/* este es el icono a mostrar */}
                <button className="place-pin">
                  <img src="/place.png" alt="place"/>
                </button>
              </Marker>
            );
          })}


        </GoogleMapReact>
        {/* <div>Icons made by
          <a href="https://www.flaticon.com/free-icon/place_1452563" title="Kiranshastry"> Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>*/}
        </div>
        </>
  );

  // funcion para buscar una ubicacion
  function Search({ panTo }) {

    let latitude;
    let longitude;

    const {
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      // Sugerecias cercanas a este punto
      // radius define el tamaño de ese punto
      requestOptions: {
        location: { lat: () => 40.432, lng: () => -3.3832 },
        radius: 100 * 1000,
      },
    });
    // setea como value el valor de el input
    const handleInput = (e) => {
      setValue(e.target.value);
    };
    // Set el address con el valor seleccionado
    //devuelve la sugerencia seleccionada
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
      // funcion para convertir la direccion pasada a coordenadas
      try {
        const results = await getGeocode({ address });
        //getGeoCode
        //devuelve los limites de la zona seleccionada
        const { lat, lng } = await getLatLng(results[0]);
        latitude = lat;
        longitude = lng;
        setLocalization(address)
        //getLatLng
        //devuelve el centro de la zona seleccionada anteriormente
        panTo({ lat, lng });
      } catch (error) {
        console.log("Error: ", error);
      }

      window.location.replace(`/search/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${ address}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail=${useremail !== "" ? useremail : ""}`)
    };
    return (
      //input donde buscas la ubicacion
      <div>
        <Combobox onSelect={handleSelect}
                  className="search-container">
          <ComboboxInput
            //Formato establecido por la libreria
            value={value}
            onChange={handleInput}
            placeholder="¿Donde te encuentras?"
            className="search"
          />
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

