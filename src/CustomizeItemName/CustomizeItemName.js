import React from 'react';
import CustomizeItemResult from '../CustomizeItemResult/CustomizeItemResult';
import slugify from 'slugify';
import './CustomizeItemName.css'

function CustomizeItemName(props) {
  return (
  Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
   
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>

          {props.features[feature].map((item, id) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
          <CustomizeItemResult selected={props.selected} updateFeature={props.updateFeature} feature={feature} item={item} itemHash={itemHash} key={id}/>
          )})}
          </fieldset>
      );
    })
  )}


  

export default CustomizeItemName;