import React, { Component } from 'react';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import Link from '../Link';

const messages = defineMessages({
  first_link: {
    id: 'footer.about-menu.english-classes',
    defaultMessage: 'English Grammar Class',
    description: 'asdas',
  },
  second_link: {
    id: 'footer.about-menu.music-classes',
    defaultMessage: 'Music classes',
    description: 'asdasd',
  },
  third_link: {
    id: 'footer.about-menu.swimming-classes',
    defaultMessage: 'Swimming classes',
    description: 'dasda',
  },
  forth_link: {
    id: 'footer.about-menu.karate-classes',
    defaultMessage: 'Karate classes',
    description: 'asdasd',
  },
});

const urlList = [
  { path: '/', title:  messages.first_link },
  { path: '/', title:  messages.second_link },
  { path: '/', title:  messages.third_link },
  { path: '/', title:  messages.forth_link },
]

class AboutMenu extends Component {
  createMenuList(){
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
    return( <ul>{this.createMenuList()}</ul> );
  }
}

AboutMenu.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(AboutMenu);
