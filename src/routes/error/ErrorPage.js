/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  render() {
    if (process.env.NODE_ENV !== 'production') {
      const { error } = this.props;
      return (<h1>Error Page</h1>);
    }

    return (<h1>Error Page</h1>);
  }
}

export { ErrorPage as ErrorPageWithoutStyle };
export default ErrorPage;
