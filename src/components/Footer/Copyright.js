import React from 'react'
import path from 'path';
import { defineMessages, FormattedMessage } from 'react-intl';
import Link from '../Link';
import facebookImg from '../../assets/images/facebook.png'
import twitterImg from '../../assets/images/twitter.png'
import gplusImg from '../../assets/images/gplus.png'
import pinterestImg from '../../assets/images/pinterest.png'

const imagesPath = path.join(__dirname, '../../assets/images/');

const messages = defineMessages({
  copyright: {
    id: 'footer.copyright.copyright',
    defaultMessage: '© 2016 Time4kids. All rights reserved. Design by',
    description: 'default',
  },
  follow_us: {
    id: 'footer.copyright.follow_us',
    defaultMessage: 'Follow us',
    description: 'default',
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
            <Link to={'#'} title="Facebook"><img src={facebookImg} alt="" title="" /></Link>
          </li>
          <li className="twitter">
            <Link to={'#'} title="Twitter"><img src={twitterImg} alt="" title="" /></Link>
          </li>
          <li className="gplus">
            <Link to={'#'} title="GooglePlus"><img src={gplusImg} alt="" title="" /></Link>
          </li>
          <li className="pinterest">
            <Link to={'#'} title="Pinterest"><img src={pinterestImg} alt="" title="" /></Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Copyright;
