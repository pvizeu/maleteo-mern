import React, { useState } from "react";
import "./InputComponent.scss"
import calendario from "../../img/icons8Calendar100Copy@3x.jpg"
import lupa from "../../img/lupa@3x.jpg"
import maleta from "../../img/maletita@3x.jpg"
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
          <div className='container'>
              <img className="img3" src={lupa}/>
              <input  className="where" {...getInputProps({ placeholder: "¿Donde te encuentras? Madrid, Barcelona..." })}/>

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
        <div className="c-form">
          <div className="c-prueba">
              <Link to={"/calendar"}>
                <img src={calendario} className="img"/>
              </Link>
              <input placeholder="Deposito" className="retirada"/>
          </div>
            <div className="c-prueba2">
                <Link to={"/calendar"}>
                    <img src={calendario} className="img"/>
                </Link>
                <input placeholder="Retirada" className="retirada"/>
            </div>
        </div>
       <div className="c-form2">
           <div className="c-prueba">
               <Link to={"/calendar"}>
                   <img src={maleta} className="img2"/>
               </Link>
               <input placeholder="Nº de piezas" className="retirada"/>
           </div>
           <div className="c-prueba3">
               <Link to={`/search/?lat=${coordinates.lat}&lng=${coordinates.lng}`}>
                   <button className="b-btn">Continuar</button>
               </Link>
           </div>

       </div>
      </form>
    </div>
  );
} 