import React, { Component } from 'react';
import { injectIntl, intlShape, defineMessages, FormattedMessage } from 'react-intl';
import Link from '../Link';

const messages = defineMessages({
  'title': {
    id: 'footer.about-menu.title',
    defaultMessage: 'About Kids Life',
    description: false,
  },
  'description': {
    id: 'footer.about-menu.description',
    defaultMessage: 'Menu description',
    description: false,
  },
  first_link: {
    id: 'footer.about-menu.english-classes',
    defaultMessage: 'English Grammar Class',
    description: false,
  },
  second_link: {
    id: 'footer.about-menu.music-classes',
    defaultMessage: 'Music classes',
    description: false,
  },
  third_link: {
    id: 'footer.about-menu.swimming-classes',
    defaultMessage: 'Swimming classes',
    description: false,
  },
  forth_link: {
    id: 'footer.about-menu.karate-classes',
    defaultMessage: 'Karate classes',
    description: false,
  },
});

const urlList = [
  { path: '/', title:  messages.first_link },
  { path: '/', title:  messages.second_link },
  { path: '/', title:  messages.third_link },
  { path: '/', title:  messages.forth_link },
]

class AboutMenu extends Component {
  createMenuList() {
    const {formatMessage} = this.props.intl;

    return urlList.map((link, index) => {
      return (
        <li key= {index}>
          <Link to={link.path} title={ formatMessage(link.title) }>{ formatMessage(link.title) }</Link>
        </li>
      );
    });
  }

  render() {
    return(
      <aside className='widget widget_text'>
        <h3 className='widgettitle red_sketch'> <FormattedMessage {...messages.title} /> </h3>
        <p><FormattedMessage {...messages.description} /></p>
        <ul>{this.createMenuList()}</ul>
      </aside>
    );
  };
};

AboutMenu.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(AboutMenu);
