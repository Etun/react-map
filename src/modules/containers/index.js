import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Marker from '../../modules/components/Marker';
import Map from '../../modules/components/Map';
import { updateLocation as change } from '../redux/pins';

@connect(
  (state) =>({
    places: state.pins.places,
    selectedPin: state.pins.currentLocation,
  }),
  { change }
)
export default class App extends Component {
  static propTypes = {
    change: PropTypes.func,
    selectedPin: PropTypes.string,
    places: PropTypes.array,
  };

  static defaultProps = {
    center: [59.25, 30.33],
    zoom: 8,
  };

  state = {
    scale: 0.7,
    zoom: 8,
  };

  handleLocationChange =(name)=> {
    this.props.change(name);
  };

  handleMapChange =({ zoom })=> {
    if(this.state.zoom !== zoom) {
      this.changeScale();
      this.setState({
        zoom
      })
    }
  };

  changeScale =()=> {
    this.setState({
      scale: 0,
    });
    setTimeout(() => this.setState({
      scale: 0.7,
    }), 100);
  };

  render() {
    const { center, zoom, selectedPin, places } = this.props;

    return (
      <Map
        center={ center }
        zoom={ zoom }
        onChange={ this.handleMapChange }
      >
        {places.map((place) =>
          <Marker
            scale={ this.state.scale }
            onChange={ () => this.handleLocationChange(place.name) }
            key={ place.text}
            lat={ place.lat }
            lng={ place.lng }
            text={ place.text }
            selected={ selectedPin === place.name }
          />
        )}
      </Map>
    )
  }
}