import React, { useState } from "react";
import "./InputComponent.scss"
import lupa from "../../img/lupa@3x.jpg";

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
//GET XY FROM DIRECTION

  export function InputComponentTwo({ panTo ,latitude, longitude,localization}) {
    const {ready, value,suggestions: { status, data },setValue,clearSuggestions,} = usePlacesAutocomplete({
                                                              value:localization,
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
                            panTo({lat,lng,address});
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
