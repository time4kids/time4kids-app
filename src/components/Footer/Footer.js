/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import AboutMenu from './AboutMenu'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-widgets-wrapper">
          <div className="container">
            <div className="column dt-sc-one-fourth first">
              <aside className="widget widget_text">
                <h3 className="widgettitle red_sketch"> About Kids Life </h3>
                <p>Happy <a href=""><strong>Kids Life</strong></a> comes with powerful theme options, which empowers you to quickly and easily build incredible store.</p>
                <AboutMenu />
              </aside>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
