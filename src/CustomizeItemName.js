import React from 'react';
import CustomizeItemResult from './CustomizeItemResult';

function CustomizeItemName(){
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

export default CustomizeItemName;