import React, { useState } from "react";
import "./InputComponent.scss"
import lupa from "../../img/lupa@3x.jpg"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

//GET XY FROM DIRECTION

export function InputComponent(props) {

  const [localization, setLocalization] = useState(props.localization);
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
    setLocalization(value);
    setCoordinates(latLng);

    props.fnUpdateForm({
      latLng: latLng,
      localization: value
    })
  };
  return (
    <div>

      <PlacesAutocomplete
      //Formato establecido por la libreria
        value={localization}
        onChange={setLocalization}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='container'>
              <img className="img3" src={lupa} alt="/"/>
              <input  className="where" {...getInputProps({ placeholder: (localization !== "" ? localization : "¿Donde" +
                  " te" +
                  " encuentras? Madrid," +
                  " Barcelona...") })}/>

            <div className="suggestion-box">
              {/* Si loading es true devuelve ..loading */}
              {loading ? <div>...loading</div> : null}

              {/* Devuelve un array de sugerencias */}
              {/* Se hace un map para devolver la lista de sugerencias */}
              {suggestions.map(item => {
                const style = {
                  backgroundColor: item.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div className="suggestion-box" {...getSuggestionItemProps(item, { style })}>
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