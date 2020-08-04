/**
 *
 * CubeGame
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { Input } from 'antd';
import Cube from 'components/Cube';
import makeSelectCubeGame from './selectors';
import reducer from './reducer';

export function CubeGame() {
  useInjectReducer({ key: 'cubeGame', reducer });
  const [area, setArea] = useState({ x: null, y: null });
  const [dimensionMapping, setDimensionMapping] = useState([]);

  const updateState = dimension => ({ target }) => {
    const newArea = { ...area, [dimension]: target.value };
    setArea(newArea);
    setDimensionMapping(calDimensionMapping(newArea));
  };

  const calDimensionMapping = inputArea => {
    const dimension = [];
    for (let i = 0; i < inputArea.x; i += 1) {
      dimension.push([]);
      for (let j = 0; j < inputArea.y; j += 1) {
        dimension[i].push({});
      }
    }
    return dimension;
  };

  return (
    <>
      <Input placeholder="Y" value={area.y} onChange={updateState('y')} />
      <Input placeholder="X" value={area.x} onChange={updateState('x')} />

      <section>
        {dimensionMapping.map(aX => (
          <div>
            {aX.map(() => (
              <Cube />
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

CubeGame.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cubeGame: makeSelectCubeGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CubeGame);
