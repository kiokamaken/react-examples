import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cubeGame state domain
 */

const selectCubeGameDomain = state => state.cubeGame || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CubeGame
 */

const makeSelectCubeGame = () =>
  createSelector(
    selectCubeGameDomain,
    substate => substate,
  );

export default makeSelectCubeGame;
export { selectCubeGameDomain };
