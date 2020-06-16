import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Link } from "react-router-dom";

//GET XY FROM DIRECTION

export function InputComponent() {

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
  };


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
      {/* Redirecciona al mapa con la direccion seleccionada */}
      <form>
        <Link to={"/calendar"}><button className="col-6">Deposito</button></Link>
        <Link to={"/calendar"}><button className="col-6">Retirada</button></Link>
        <Link to={"/calendar"}><button className="col-4">Nº de piezas</button> </Link>


        <Link to={`/search/?lat=${coordinates.lat}&lng=${coordinates.lng}`}>
          <button className="b-btn">Continuar</button>
        </Link>
      </form>
    </div>
  );
} 