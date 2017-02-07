/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import AboutMenu from './AboutMenu';
import Copyright from './Copyright';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-widgets-wrapper">
          <div className="container">
            <div className="column dt-sc-one-fourth first">
              <AboutMenu />
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    );
  };
};

export default Footer;
