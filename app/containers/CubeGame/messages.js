/*
 * CubeGame Messages
 *
 * This contains all the text for the CubeGame container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CubeGame';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CubeGame container!',
  },
});
