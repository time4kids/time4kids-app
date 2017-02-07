import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl';
import Link from '../Link';

const messages = defineMessages({
  copyright: {
    id: 'footer.copyright.copyright',
    defaultMessage: '© 2016 Time4kids. All rights reserved. Design by',
    description: false,
  },
  follow_us: {
    id: 'footer.copyright.follow_us',
    defaultMessage: 'Follow us',
    description: false,
  },
});

const Copyright = () => (
  <div className='copyright'>
    <div className='container'>
      <p className="copyright-info"><FormattedMessage {...messages.copyright} /></p>
      <div className="footer-links">
        <p><FormattedMessage {...messages.follow_us} /></p>
        <ul className="dt-sc-social-icons">
          <li className="facebook">
            <Link to={'#'} title="Facebook">{ '<img src="images/facebook.png" alt="" title="">' }</Link>
          </li>
          <li className="twitter">
            <Link to={'#'} title="Twitter">{ '<img src="images/twitter.png" alt="" title="">' }</Link>
          </li>
          <li className="gplus">
            <Link to={'#'} title="GooglePlus">{ '<img src="images/gplus.png" alt="" title="">' }</Link>
          </li>
          <li className="pinterest">
            <Link to={'#'} title="Pinterest">{ '<img src="images/pinterest.png" alt="" title="">' }</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Copyright;
