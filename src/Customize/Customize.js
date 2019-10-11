import React from 'react';
import CustomizeItemName from '../CustomizeItemName/CustomizeItemName';

function Customize(props) {

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <CustomizeItemName selected={props.selected} updateFeature={props.updateFeature} features={props.features} />
    </form>
  )

}

export default Customize;