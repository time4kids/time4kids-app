/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import Link from '../Link';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from '../../assets/images/logo.png';

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header',
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <Link className="logo" to="/" title="Time4kids">
            <img src={logoUrl} alt="Kids Life" title="Kids Life" />
          </Link>
        </div>
        <div className="contact-details">
          <LanguageSwitcher />
        </div>
      </header>
    );
  }
}

export default Header;
