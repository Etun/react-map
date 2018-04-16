import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

import css from '../../style/main.scss';

const Marker= ({ text, onChange, selected, scale }) => (
  <Motion
    defaultStyle={{ scale: 0 }}
    style={{ scale: spring(scale, { stiffness: 180, damping: 6 })}}
  >
    {({ scale }) => (
        <div
          className={ css.marker }
          onClick={ onChange }
          style={{
            transform: 'scale(' + scale + ')'
          }}
        >
          {selected ? <div className={ css.markerBanner }>{ text }</div> : ''}
        </div>
      )
    }
  </Motion>
);

Marker.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
};

export default Marker;