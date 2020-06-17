import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Link } from "react-router-dom";

//GET XY FROM DIRECTION

export function InputComponent(props) {

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  // Seteando variables de el state
  //Aqui cambia la direccion por las coordenadas
  const handleSelect = async value => {
    //geoCodeByAddres
    //devuelve los limites de la zona seleccionada
    const results = await geocodeByAddress(value);    
    //getLatLng
    //devuelve el centro de la zona seleccionada anteriormente
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);

    props.fnUpdateForm({
      latLng: latLng,
      address: value
    })
  };

  console.log(address);
  return (
    <div>

      <PlacesAutocomplete
      //Formato establecido por la libreria
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "¿Donde te encuentras?" })} />

            <div>
              {/* Si loading es true devuelve ..loading */}
              {loading ? <div>...loading</div> : null}

              {/* Devuelve un array de sugerencias */}
              {/* Se hace un map para devolver la lista de sugerencias */}
              {suggestions.map(item => {
                const style = {
                  backgroundColor: item.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(item, { style })}>
                   {/* Devuelve un objeto, que su clave descripcion es la direccion en texto */}                    
                    {item.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
} 