/**
 *
 * Asynchronously loads the component for CubeGame
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
