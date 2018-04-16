import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Map =({ center, zoom, onChange, ...props})=> (
  <GoogleMapReact
    onChange={ onChange }
    bootstrapURLKeys={{ key: 'AIzaSyAc4nNnBoXqOl7eYXRkElsxPVf97l5DFAg' }}
    defaultCenter={ center }
    defaultZoom={ zoom }
  >
    { props.children }
  </GoogleMapReact>
);

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
};

export default Map;