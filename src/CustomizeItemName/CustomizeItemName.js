import React from 'react';
import CustomizeItemResult from '../CustomizeItemResult/CustomizeItemResult';
import slugify from 'slugify';

function CustomizeItemName(props) {
  return (
  Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
    props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <CustomizeItemResult selected={props.selected} updateFeature={props.updateFeature} feature={feature} item={item} itemHash={itemHash} />
        </fieldset>
      );
    })
  )})
  )}

export default CustomizeItemName;