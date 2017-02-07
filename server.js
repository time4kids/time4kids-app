require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(2);

  var _extends3 = _interopRequireDefault(_extends2);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/server.js'; /**
                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                           *
                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                           *
                                                                                           * This source code is licensed under the MIT license found in the
                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                           */

  // eslint-disable-line import/no-unresolved

  __webpack_require__(4);

  var _path = __webpack_require__(5);

  var _path2 = _interopRequireDefault(_path);

  var _express = __webpack_require__(6);

  var _express2 = _interopRequireDefault(_express);

  var _cookieParser = __webpack_require__(7);

  var _cookieParser2 = _interopRequireDefault(_cookieParser);

  var _expressRequestLanguage = __webpack_require__(8);

  var _expressRequestLanguage2 = _interopRequireDefault(_expressRequestLanguage);

  var _bodyParser = __webpack_require__(9);

  var _bodyParser2 = _interopRequireDefault(_bodyParser);

  var _expressJwt = __webpack_require__(10);

  var _expressJwt2 = _interopRequireDefault(_expressJwt);

  var _expressGraphql = __webpack_require__(11);

  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

  var _jsonwebtoken = __webpack_require__(12);

  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _server = __webpack_require__(14);

  var _server2 = _interopRequireDefault(_server);

  var _universalRouter = __webpack_require__(15);

  var _universalRouter2 = _interopRequireDefault(_universalRouter);

  var _prettyError = __webpack_require__(16);

  var _prettyError2 = _interopRequireDefault(_prettyError);

  var _reactIntl = __webpack_require__(17);

  __webpack_require__(18);

  var _App = __webpack_require__(22);

  var _App2 = _interopRequireDefault(_App);

  var _Html = __webpack_require__(28);

  var _Html2 = _interopRequireDefault(_Html);

  var _ErrorPage = __webpack_require__(30);

  var _passport = __webpack_require__(31);

  var _passport2 = _interopRequireDefault(_passport);

  var _models = __webpack_require__(34);

  var _models2 = _interopRequireDefault(_models);

  var _schema = __webpack_require__(41);

  var _schema2 = _interopRequireDefault(_schema);

  var _routes = __webpack_require__(53);

  var _routes2 = _interopRequireDefault(_routes);

  var _assets = __webpack_require__(92);

  var _assets2 = _interopRequireDefault(_assets);

  var _configureStore = __webpack_require__(93);

  var _configureStore2 = _interopRequireDefault(_configureStore);

  var _runtime = __webpack_require__(104);

  var _intl = __webpack_require__(68);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var app = (0, _express2.default)();

  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';

  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use((0, _expressRequestLanguage2.default)({
    languages: _config.locales,
    queryName: 'lang',
    cookie: {
      name: 'lang',
      options: {
        path: '/',
        maxAge: 3650 * 24 * 3600 * 1000 },
      url: '/lang/{language}'
    }
  }));
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());

  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());

  if (true) {
    app.enable('trust proxy');
  }
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });

  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: ("development") !== 'production',
      rootValue: { request: req },
      pretty: ("development") !== 'production'
    };
  }));

  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
      var store, locale, context, route, data, html;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              store = (0, _configureStore2.default)({
                user: req.user || null
              }, {
                cookie: req.headers.cookie
              });


              store.dispatch((0, _runtime.setRuntimeVariable)({
                name: 'initialNow',
                value: Date.now()
              }));

              store.dispatch((0, _runtime.setRuntimeVariable)({
                name: 'availableLocales',
                value: _config.locales
              }));

              locale = req.language;
              _context.next = 7;
              return store.dispatch((0, _intl.setLocale)({
                locale: locale
              }));

            case 7:

              // Global (context) variables that can be easily accessed from any React component
              // https://facebook.github.io/react/docs/context.html
              context = {
                // Initialize a new Redux store
                // http://redux.js.org/docs/basics/UsageWithReact.html
                store: store
              };
              _context.next = 10;
              return _universalRouter2.default.resolve(_routes2.default, (0, _extends3.default)({}, context, {
                path: req.path,
                query: req.query,
                locale: locale
              }));

            case 10:
              route = _context.sent;

              if (!route.redirect) {
                _context.next = 14;
                break;
              }

              res.redirect(route.status || 302, route.redirect);
              return _context.abrupt('return');

            case 14:
              data = (0, _extends3.default)({}, route);

              data.children = _server2.default.renderToString(_react2.default.createElement(
                _App2.default,
                { context: context, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  },
                  __self: undefined
                },
                route.component
              ));
              data.styles = [_assets2.default.client.css];
              data.scripts = [_assets2.default.vendor.js, _assets2.default.client.js];
              if (_assets2.default[route.chunk]) {
                data.scripts.push(_assets2.default[route.chunk].js);
              }
              data.state = context.store.getState();
              data.lang = locale;

              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                },
                __self: undefined
              })));

              res.status(route.status || 200);
              res.send('<!doctype html>' + html);
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context['catch'](0);

              next(_context.t0);

            case 29:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 26]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var locale = req.language;
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        lang: locale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: undefined
      },
      _server2.default.renderToString(_react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: locale, __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: undefined
        },
        _react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err, __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: undefined
        })
      ))
    ));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });

  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("express-request-language");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("react-intl");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _intlLocalesSupported = __webpack_require__(19);

  var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!(0, _intlLocalesSupported2.default)(_config.locales)) {
      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and replace the constructors with need with the polyfill's.
      var IntlPolyfill = __webpack_require__(21); // eslint-disable-line global-require

      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = __webpack_require__(21); // eslint-disable-line global-require
  }

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("intl-locales-supported");

/***/ },
/* 20 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /* eslint-disable max-len */

  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;

  // default locale is the first one
  var locales = exports.locales = ['en-US', 'cs-CZ'];

  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

  var analytics = exports.analytics = {

    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }

  };

  var auth = exports.auth = {

    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },

    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },

    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }

    };

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("intl");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/App.js'; /**
                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                   *
                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                   *
                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                   */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _reactIntl = __webpack_require__(17);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ContextType = {
    // Integrate Redux
    // http://redux.js.org/docs/basics/UsageWithReact.html
    store: _react.PropTypes.shape({
      subscribe: _react.PropTypes.func.isRequired,
      dispatch: _react.PropTypes.func.isRequired,
      getState: _react.PropTypes.func.isRequired
    }).isRequired
  };

  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(
   *     <App context={context}>
   *       <Layout>
   *         <LandingPage />
   *       </Layout>
   *     </App>,
   *     container,
   *   );
   */

  var App = function (_React$PureComponent) {
    (0, _inherits3.default)(App, _React$PureComponent);

    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var store = this.props.context && this.props.context.store;
        if (store) {
          this.unsubscribe = store.subscribe(function () {
            var state = store.getState();
            var newIntl = state.intl;
            if (_this2.intl !== newIntl) {
              _this2.intl = newIntl;
              console.log('Intl changed'); // eslint-disable-line no-console
              _this2.forceUpdate();
            }
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        var store = this.props.context && this.props.context.store;
        var state = store && store.getState();
        this.intl = state && state.intl || {};
        var _intl = this.intl,
            initialNow = _intl.initialNow,
            locale = _intl.locale,
            messages = _intl.messages;

        var localeMessages = messages && messages[locale] || {};
        return _react2.default.createElement(
          _reactIntl.IntlProvider,
          {
            initialNow: initialNow,
            locale: locale,
            messages: localeMessages,
            defaultLocale: 'en-US',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          },
          _react.Children.only(this.props.children)
        );
      }
    }]);
    return App;
  }(_react2.default.PureComponent);

  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
    exports.default = App;

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Html.js'; /**
                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                    *
                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                    *
                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                    */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _serializeJavascript = __webpack_require__(29);

  var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Html = function (_React$Component) {
    (0, _inherits3.default)(Html, _React$Component);

    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
    }

    (0, _createClass3.default)(Html, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            title = _props.title,
            description = _props.description,
            styles = _props.styles,
            scripts = _props.scripts,
            state = _props.state,
            lang = _props.lang,
            children = _props.children;

        return _react2.default.createElement(
          'html',
          { className: 'no-js', lang: lang, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          _react2.default.createElement(
            'head',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }),
            _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            _react2.default.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('meta', { name: 'description', content: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }),
            styles && styles.map(function (style) {
              return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: style, href: style, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: _this2
              });
            }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'body',
            { className: 'main', __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children }, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }),
            state && _react2.default.createElement('script', {
              dangerouslySetInnerHTML: { __html: 'window.APP_STATE=' + (0, _serializeJavascript2.default)(state, { isJSON: true }) },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }),
            scripts && scripts.map(function (script) {
              return _react2.default.createElement('script', { key: script, src: script, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: _this2
              });
            }),
            _config.analytics.google.trackingId && _react2.default.createElement('script', {
              dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            }),
            _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Html;
  }(_react2.default.Component);

  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    styles: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
    scripts: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
    state: _react.PropTypes.object,
    lang: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
    exports.default = Html;

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("serialize-javascript");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/error/ErrorPage.js'; /**
                                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                           *
                                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                           *
                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                                           */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ErrorPage = function (_React$Component) {
    (0, _inherits3.default)(ErrorPage, _React$Component);

    function ErrorPage() {
      (0, _classCallCheck3.default)(this, ErrorPage);
      return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(ErrorPage, [{
      key: 'render',
      value: function render() {
        if (true) {
          var error = this.props.error;

          return _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            'Error Page'
          );
        }

        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          'Error Page'
        );
      }
    }]);
    return ErrorPage;
  }(_react2.default.Component);

  ErrorPage.propTypes = {
    error: _react.PropTypes.object.isRequired
  };
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = ErrorPage;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _passport = __webpack_require__(32);

  var _passport2 = _interopRequireDefault(_passport);

  var _passportFacebook = __webpack_require__(33);

  var _models = __webpack_require__(34);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */

  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }

                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });

              case 3:
                userLogin = _context.sent;

                if (!userLogin) {
                  _context.next = 8;
                  break;
                }

                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;

              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });

              case 10:
                user = _context.sent;

                done(null, {
                  id: user.id,
                  email: user.email
                });

              case 12:
                _context.next = 32;
                break;

              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });

              case 16:
                users = _context.sent;

                if (!users.length) {
                  _context.next = 21;
                  break;
                }

                done(null, users[0]);
                _context.next = 32;
                break;

              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });

              case 23:
                _user = _context.sent;

                if (!_user) {
                  _context.next = 28;
                  break;
                }

                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;

              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailConfirmed: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });

              case 30:
                _user = _context.sent;

                done(null, {
                  id: _user.id,
                  email: _user.email
                });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();

    fooBar().catch(done);
  }));

  exports.default = _passport2.default;

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;

  var _sequelize = __webpack_require__(35);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _User = __webpack_require__(37);

  var _User2 = _interopRequireDefault(_User);

  var _UserLogin = __webpack_require__(38);

  var _UserLogin2 = _interopRequireDefault(_UserLogin);

  var _UserClaim = __webpack_require__(39);

  var _UserClaim2 = _interopRequireDefault(_UserClaim);

  var _UserProfile = __webpack_require__(40);

  var _UserProfile2 = _interopRequireDefault(_UserProfile);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */

  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });

  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });

  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }

  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
    exports.UserProfile = _UserProfile2.default;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(36);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });

    exports.default = sequelize;

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(36);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(35);

  var _sequelize4 = _interopRequireDefault(_sequelize3);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var User = _sequelize4.default.define('User', {

    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },

    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },

    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }

  }, {

    indexes: [{ fields: ['email'] }]

  });

    exports.default = User;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(36);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(35);

  var _sequelize4 = _interopRequireDefault(_sequelize3);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var UserLogin = _sequelize4.default.define('UserLogin', {

    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },

    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }

  });

    exports.default = UserLogin;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(36);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(35);

  var _sequelize4 = _interopRequireDefault(_sequelize3);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var UserClaim = _sequelize4.default.define('UserClaim', {

    type: {
      type: _sequelize2.default.STRING
    },

    value: {
      type: _sequelize2.default.INTEGER
    }

  });

    exports.default = UserClaim;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(36);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(35);

  var _sequelize4 = _interopRequireDefault(_sequelize3);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var UserProfile = _sequelize4.default.define('UserProfile', {

    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },

    displayName: {
      type: _sequelize2.default.STRING(100)
    },

    picture: {
      type: _sequelize2.default.STRING(255)
    },

    gender: {
      type: _sequelize2.default.STRING(50)
    },

    location: {
      type: _sequelize2.default.STRING(100)
    },

    website: {
      type: _sequelize2.default.STRING(255)
    }

  });

    exports.default = UserProfile;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(42);

  var _me = __webpack_require__(43);

  var _me2 = _interopRequireDefault(_me);

  var _news = __webpack_require__(45);

  var _news2 = _interopRequireDefault(_news);

  var _intl = __webpack_require__(50);

  var _intl2 = _interopRequireDefault(_intl);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        news: _news2.default,
        intl: _intl2.default
      }
    })
  });

    exports.default = schema;

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _UserType = __webpack_require__(44);

  var _UserType2 = _interopRequireDefault(_UserType);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;

      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

    exports.default = me;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(42);

  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */

    exports.default = UserType;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(42);

  var _fetch = __webpack_require__(46);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _NewsItemType = __webpack_require__(49);

  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */

  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);

  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }

      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }

            return items;
          }).finally(function () {
            lastFetchTask = null;
          });

          if (items.length) {
            return items;
          }

          return lastFetchTask;
        }

      return items;
    }
  };

    exports.default = news;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;

  var _bluebird = __webpack_require__(47);

  var _bluebird2 = _interopRequireDefault(_bluebird);

  var _nodeFetch = __webpack_require__(48);

  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */

  _nodeFetch.Response.Promise = _bluebird2.default;

  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }

    if (url.startsWith('http')) {
      return url;
    }

    return 'http://' + _config.host + url;
  }

  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }

  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
    exports.Response = _nodeFetch.Response;

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(42);

  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */

    exports.default = NewsItemType;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _fs = __webpack_require__(51);

  var _fs2 = _interopRequireDefault(_fs);

  var _path = __webpack_require__(5);

  var _bluebird = __webpack_require__(47);

  var _bluebird2 = _interopRequireDefault(_bluebird);

  var _graphql = __webpack_require__(42);

  var _IntlMessageType = __webpack_require__(52);

  var _IntlMessageType2 = _interopRequireDefault(_IntlMessageType);

  var _config = __webpack_require__(20);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // A folder with messages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var CONTENT_DIR = (0, _path.join)(__dirname, './messages');

  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);

  var intl = {
    type: new _graphql.GraphQLList(_IntlMessageType2.default),
    args: {
      locale: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref, _ref2) {
      var _this = this;

      var request = _ref.request;
      var locale = _ref2.locale;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var localeData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_config.locales.includes(locale)) {
                  _context.next = 2;
                  break;
                }

                throw new Error('Locale \'' + locale + '\' not supported');

              case 2:
                localeData = void 0;
                _context.prev = 3;
                _context.next = 6;
                return readFile((0, _path.join)(CONTENT_DIR, locale + '.json'));

              case 6:
                localeData = _context.sent;
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                if (!(_context.t0.code === 'ENOENT')) {
                  _context.next = 13;
                  break;
                }

                throw new Error('Locale \'' + locale + '\' not found');

              case 13:
                return _context.abrupt('return', JSON.parse(localeData));

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[3, 9]]);
      }))();
    }
  };

    exports.default = intl;

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(42);

  var IntlMessageType = new _graphql.GraphQLObjectType({
    name: 'IntlMessage',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      defaultMessage: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      message: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString },
      files: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */

    exports.default = IntlMessageType;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /* eslint-disable global-require */

  // The top-level (parent) route
  exports.default = {

    path: '/',

    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(54).default, __webpack_require__(73).default, __webpack_require__(75).default, __webpack_require__(77).default, __webpack_require__(79).default, __webpack_require__(85).default, __webpack_require__(88).default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(90).default],

    action: function action(_ref) {
      var _this = this;

      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();

              case 2:
                route = _context.sent;


                // Provide default values for title, description etc.
                route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
                route.description = route.description || '';

                return _context.abrupt('return', route);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _stringify = __webpack_require__(55);

  var _stringify2 = _interopRequireDefault(_stringify);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/home/index.js'; /**
                                                                                                      * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                      *
                                                                                                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                      *
                                                                                                      * This source code is licensed under the MIT license found in the
                                                                                                      * LICENSE.txt file in the root directory of this source tree.
                                                                                                      */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Home = __webpack_require__(56);

  var _Home2 = _interopRequireDefault(_Home);

  var _fetch = __webpack_require__(46);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{news{title,link,publishedDate,contentSnippet}}'
                  }),
                  credentials: 'include'
                });

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                _ref = _context.sent;
                data = _ref.data;

                if (!(!data || !data.news)) {
                  _context.next = 9;
                  break;
                }

                throw new Error('Failed to load the news feed.');

              case 9:
                return _context.abrupt('return', {
                  title: 'React Starter Kit',
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Home2.default, { news: data.news, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      },
                      __self: _this
                    })
                  )
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/home/Home.js'; /**
                                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                     *
                                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                     *
                                                                                                     * This source code is licensed under the MIT license found in the
                                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                                     */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _reactIntl = __webpack_require__(17);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home() {
      (0, _classCallCheck3.default)(this, Home);
      return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
    }

    (0, _createClass3.default)(Home, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'root', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              'React.js News'
            )
          )
        );
      }
    }]);
    return Home;
  }(_react2.default.Component);

  Home.propTypes = {
    news: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      title: _react.PropTypes.string.isRequired,
      link: _react.PropTypes.string.isRequired,
      contentSnippet: _react.PropTypes.string
    })).isRequired
  };
    exports.default = Home;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Layout/Layout.js'; /**
                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                             *
                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                             *
                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                             */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _app = __webpack_require__(58);

  var _app2 = _interopRequireDefault(_app);

  var _Header = __webpack_require__(59);

  var _Header2 = _interopRequireDefault(_Header);

  var _Footer = __webpack_require__(71);

  var _Footer2 = _interopRequireDefault(_Footer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          _react2.default.createElement(_Header2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          this.props.children,
          _react2.default.createElement(_Footer2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          })
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component);

  Layout.propTypes = {
    children: _react.PropTypes.node.isRequired
  };
    exports.default = Layout;

/***/ },
/* 58 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Header/Header.js'; /**
                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                             *
                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                             *
                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                             */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _reactIntl = __webpack_require__(17);

  var _Link = __webpack_require__(60);

  var _Link2 = _interopRequireDefault(_Link);

  var _Navigation = __webpack_require__(64);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _LanguageSwitcher = __webpack_require__(66);

  var _LanguageSwitcher2 = _interopRequireDefault(_LanguageSwitcher);

  var _logo = __webpack_require__(70);

  var _logo2 = _interopRequireDefault(_logo);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var messages = (0, _reactIntl.defineMessages)({
    brand: {
      'id': 'header.brand',
      'defaultMessage': 'Your Company Brand'
    },
    bannerTitle: {
      'id': 'header.banner.title',
      'defaultMessage': 'React'
    },
    bannerDesc: {
      'id': 'header.banner.desc',
      'defaultMessage': 'Complex web apps made easy'
    }
  });

  var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'header',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            _react2.default.createElement(
              _Link2.default,
              { className: 'logo', to: '/', title: 'Time4kids', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: this
              },
              _react2.default.createElement('img', { src: _logo2.default, alt: 'Kids Life', title: 'Kids Life', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'contact-details', __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            _react2.default.createElement(_LanguageSwitcher2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Header;
  }(_react2.default.Component);

    exports.default = Header;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(2);

  var _extends3 = _interopRequireDefault(_extends2);

  var _objectWithoutProperties2 = __webpack_require__(61);

  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Link/Link.js'; /**
                                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                         *
                                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                         *
                                                                                                         * This source code is licensed under the MIT license found in the
                                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                                         */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _history = __webpack_require__(62);

  var _history2 = _interopRequireDefault(_history);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);

    function Link() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Link);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (event.defaultPrevented === true) {
          return;
        }

        event.preventDefault();
        _history2.default.push(_this.props.to);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);

        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick, title: props.title, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }),
          children
        );
      }
    }]);
    return Link;
  }(_react2.default.Component);

  Link.propTypes = {
    to: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
    exports.default = Link;

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createBrowserHistory = __webpack_require__(63);

  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (false) && (0, _createBrowserHistory2.default)(); /**
                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                   *
                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                   *
                                                                                   * This source code is licensed under the MIT license found in the
                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                   */

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(2);

  var _extends3 = _interopRequireDefault(_extends2);

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Navigation/Navigation.js'; /**
                                                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                     *
                                                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                     *
                                                                                                                     * This source code is licensed under the MIT license found in the
                                                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                                                     */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _reactIntl = __webpack_require__(17);

  var _classnames = __webpack_require__(65);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Link = __webpack_require__(60);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var messages = (0, _reactIntl.defineMessages)({
    about: {
      'id': 'navigation.about',
      'defaultMessage': 'About'
    },
    contact: {
      'id': 'navigation.contact',
      'defaultMessage': 'Contact'
    },
    login: {
      'id': 'navigation.login',
      'defaultMessage': 'Log in'
    },
    or: {
      'id': 'navigation.separator.or',
      'defaultMessage': 'or'
    },
    signup: {
      'id': 'navigation.signup',
      'defaultMessage': 'Sign up'
    }
  });

  var Navigation = function (_React$Component) {
    (0, _inherits3.default)(Navigation, _React$Component);

    function Navigation() {
      (0, _classCallCheck3.default)(this, Navigation);
      return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
    }

    (0, _createClass3.default)(Navigation, [{
      key: 'render',
      value: function render() {
        var className = this.props.className;

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(s.root, className), role: 'navigation', __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          _react2.default.createElement(
            _Link2.default,
            { className: s.link, to: '/about', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: this
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, (0, _extends3.default)({}, messages.about, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            }))
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: s.link, to: '/contact', __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, (0, _extends3.default)({}, messages.contact, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }))
          ),
          _react2.default.createElement(
            'span',
            { className: s.spacer, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            },
            ' | '
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: s.link, to: '/login', __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, (0, _extends3.default)({}, messages.login, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }))
          ),
          _react2.default.createElement(
            'span',
            { className: s.spacer, __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, (0, _extends3.default)({}, messages.or, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            }))
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: (0, _classnames2.default)(s.link, s.highlight), to: '/register', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, (0, _extends3.default)({}, messages.signup, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            }))
          )
        );
      }
    }]);
    return Navigation;
  }(_react2.default.Component);

  Navigation.propTypes = {
    className: _react.PropTypes.string
  };
    exports.default = Navigation;

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/LanguageSwitcher/LanguageSwitcher.js'; /* eslint-disable no-shadow */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _reactRedux = __webpack_require__(67);

  var _intl = __webpack_require__(68);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function LanguageSwitcher(_ref) {
    var _this = this;

    var currentLocale = _ref.currentLocale,
        availableLocales = _ref.availableLocales,
        setLocale = _ref.setLocale;

    var isSelected = function isSelected(locale) {
      return locale === currentLocale;
    };
    var localeDict = {
      'en-US': 'English',
      'cs-CZ': 'Česky'
    };
    var localeName = function localeName(locale) {
      return localeDict[locale] || locale;
    };
    return _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      },
      availableLocales.map(function (locale) {
        return _react2.default.createElement(
          'span',
          { key: locale, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: _this
          },
          isSelected(locale) ? _react2.default.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: _this
            },
            localeName(locale)
          ) :
          // github.com/yannickcr/eslint-plugin-react/issues/945
          // eslint-disable-next-line react/jsx-indent
          _react2.default.createElement(
            'a',
            {
              href: '?lang=' + locale,
              onClick: function onClick(e) {
                setLocale({ locale: locale });
                e.preventDefault();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: _this
            },
            localeName(locale)
          ),
          ' '
        );
      })
    );
  }

  LanguageSwitcher.propTypes = {
    currentLocale: _react.PropTypes.string.isRequired,
    availableLocales: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
    setLocale: _react.PropTypes.func.isRequired
  };

  var mapState = function mapState(state) {
    return {
      availableLocales: state.runtime.availableLocales,
      currentLocale: state.intl.locale
    };
  };

  var mapDispatch = {
    setLocale: _intl.setLocale
  };

    exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(LanguageSwitcher);

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("react-redux");

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  exports.setLocale = setLocale;

  var _constants = __webpack_require__(69);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var query = '\n  query ($locale:String!) {\n    intl (locale:$locale) {\n      id\n      message\n    }\n  }\n'; /* eslint-disable import/prefer-default-export */

  function setLocale(_ref) {
    var _this = this;

    var locale = _ref.locale;

    return function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState, _ref3) {
        var graphqlRequest = _ref3.graphqlRequest;

        var _ref4, data, messages, maxAge;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _constants.SET_LOCALE_START,
                  payload: {
                    locale: locale
                  }
                });

                _context.prev = 1;
                _context.next = 4;
                return graphqlRequest(query, { locale: locale });

              case 4:
                _ref4 = _context.sent;
                data = _ref4.data;
                messages = data.intl.reduce(function (msgs, msg) {
                  msgs[msg.id] = msg.message; // eslint-disable-line no-param-reassign
                  return msgs;
                }, {});

                dispatch({
                  type: _constants.SET_LOCALE_SUCCESS,
                  payload: {
                    locale: locale,
                    messages: messages
                  }
                });

                // remember locale for every new request
                if (false) {
                  maxAge = 3650 * 24 * 3600; // 10 years in seconds

                  document.cookie = 'lang=' + locale + ';path=/;max-age=' + maxAge;
                }
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                dispatch({
                  type: _constants.SET_LOCALE_ERROR,
                  payload: {
                    locale: locale,
                    error: _context.t0
                  }
                });
                return _context.abrupt('return', false);

              case 15:
                return _context.abrupt('return', true);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 11]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();
    }

/***/ },
/* 69 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint-disable import/prefer-default-export */

  var SET_RUNTIME_VARIABLE = exports.SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
  var SET_LOCALE_START = exports.SET_LOCALE_START = 'SET_LOCALE_START';
  var SET_LOCALE_SUCCESS = exports.SET_LOCALE_SUCCESS = 'SET_LOCALE_SUCCESS';
  var SET_LOCALE_ERROR = exports.SET_LOCALE_ERROR = 'SET_LOCALE_ERROR';

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "_/assets/images/logo.png?d1763135";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Footer/Footer.js'; /**
                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                             *
                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                             *
                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                             */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _AboutMenu = __webpack_require__(72);

  var _AboutMenu2 = _interopRequireDefault(_AboutMenu);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Footer = function (_React$Component) {
    (0, _inherits3.default)(Footer, _React$Component);

    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'footer',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'footer-widgets-wrapper', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'container', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: 'column dt-sc-one-fourth first', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'aside',
                  { className: 'widget widget_text', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'h3',
                    { className: 'widgettitle red_sketch', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: this
                    },
                    ' About Kids Life '
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                      },
                      __self: this
                    },
                    'Happy ',
                    _react2.default.createElement(
                      'a',
                      { href: '', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 22
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'strong',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                          },
                          __self: this
                        },
                        'Kids Life'
                      )
                    ),
                    ' comes with powerful theme options, which empowers you to quickly and easily build incredible store.'
                  ),
                  _react2.default.createElement(_AboutMenu2.default, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  })
                )
              )
            )
          )
        );
      }
    }]);
    return Footer;
  }(_react2.default.Component);

    exports.default = Footer;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Footer/AboutMenu.js';

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _reactIntl = __webpack_require__(17);

  var _Link = __webpack_require__(60);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var messages = (0, _reactIntl.defineMessages)({
    first_link: {
      'id': 'footer.about-menu.english-classes',
      'defaultMessage': 'English Grammar Class'
    },
    second_link: {
      'id': 'footer.about-menu.music-classes',
      'defaultMessage': 'Music classes'
    },
    third_link: {
      'id': 'footer.about-menu.swimming-classes',
      'defaultMessage': 'Swimming classes'
    },
    forth_link: {
      'id': 'footer.about-menu.karate-classes',
      'defaultMessage': 'Karate classes'
    }
  });

  var urlList = [{ path: '/', title: messages.first_link }, { path: '/', title: messages.second_link }, { path: '/', title: messages.third_link }, { path: '/', title: messages.forth_link }];

  var AboutMenu = function (_Component) {
    (0, _inherits3.default)(AboutMenu, _Component);

    function AboutMenu() {
      (0, _classCallCheck3.default)(this, AboutMenu);
      return (0, _possibleConstructorReturn3.default)(this, (AboutMenu.__proto__ || (0, _getPrototypeOf2.default)(AboutMenu)).apply(this, arguments));
    }

    (0, _createClass3.default)(AboutMenu, [{
      key: 'createMenuList',
      value: function createMenuList() {
        var _this2 = this;

        var formatMessage = this.props.intl.formatMessage;


        return urlList.map(function (link, index) {
          return _react2.default.createElement(
            'li',
            { key: index, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: _this2
            },
            _react2.default.createElement(
              _Link2.default,
              { to: link.path, title: formatMessage(link.title), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: _this2
              },
              formatMessage(link.title)
            )
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          this.createMenuList()
        );
      }
    }]);
    return AboutMenu;
  }(_react.Component);

  AboutMenu.propTypes = {
    intl: _reactIntl.intlShape.isRequired
  };

    exports.default = (0, _reactIntl.injectIntl)(AboutMenu);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/contact/index.js'; /**
                                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                         *
                                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                         *
                                                                                                         * This source code is licensed under the MIT license found in the
                                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                                         */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Contact = __webpack_require__(74);

  var _Contact2 = _interopRequireDefault(_Contact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Contact Us';

  exports.default = {

    path: '/contact',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Contact2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/contact/Contact.js'; /**
                                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                           *
                                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                           *
                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                                           */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact() {
      (0, _classCallCheck3.default)(this, Contact);
      return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
    }

    (0, _createClass3.default)(Contact, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          'Contact Page'
        );
      }
    }]);
    return Contact;
  }(_react2.default.Component);

  Contact.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = Contact;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/login/index.js'; /**
                                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                       *
                                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                       *
                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                                       */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Login = __webpack_require__(76);

  var _Login2 = _interopRequireDefault(_Login);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Log In';

  exports.default = {

    path: '/login',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Login2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/login/Login.js'; /**
                                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                       *
                                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                       *
                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                                       */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Login = function (_React$Component) {
    (0, _inherits3.default)(Login, _React$Component);

    function Login() {
      (0, _classCallCheck3.default)(this, Login);
      return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
    }

    (0, _createClass3.default)(Login, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          'Login Page'
        );
      }
    }]);
    return Login;
  }(_react2.default.Component);

  Login.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = Login;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/register/index.js'; /**
                                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                          *
                                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                          *
                                                                                                          * This source code is licensed under the MIT license found in the
                                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                                          */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Register = __webpack_require__(78);

  var _Register2 = _interopRequireDefault(_Register);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'New User Registration';

  exports.default = {

    path: '/register',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Register2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/register/Register.js'; /**
                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                             *
                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                             *
                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                             */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Register = function (_React$Component) {
    (0, _inherits3.default)(Register, _React$Component);

    function Register() {
      (0, _classCallCheck3.default)(this, Register);
      return (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).apply(this, arguments));
    }

    (0, _createClass3.default)(Register, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          'Register Page'
        );
      }
    }]);
    return Register;
  }(_react2.default.Component);

  Register.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = Register;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(2);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(80);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/about/index.js'; /**
                                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                       *
                                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                       *
                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                                       */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(81);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/about',

    action: function action(_ref) {
      var _this = this;

      var locale = _ref.locale;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    try {
                      resolve(__webpack_require__(82)("./about." + locale + '.md')); // eslint-disable-line import/no-dynamic-require
                    } catch (e) {
                      resolve(__webpack_require__(84));
                    }
                  }(__webpack_require__));
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 80 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = "/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/components/Page/Page.js"; /**
                                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                         *
                                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                         *
                                                                                                         * This source code is licensed under the MIT license found in the
                                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                                         */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Page = function (_React$Component) {
    (0, _inherits3.default)(Page, _React$Component);

    function Page() {
      (0, _classCallCheck3.default)(this, Page);
      return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
    }

    (0, _createClass3.default)(Page, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            title = _props.title,
            html = _props.html;

        return _react2.default.createElement(
          "div",
          { className: "container", __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          title && _react2.default.createElement(
            "h1",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            title
          ),
          _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: html }, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        );
      }
    }]);
    return Page;
  }(_react2.default.Component);

  Page.propTypes = {
    title: _react.PropTypes.string,
    html: _react.PropTypes.string.isRequired
  };
    exports.default = Page;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  var map = {
  	"./about.cs-CZ.md": 83
  };
  function webpackContext(req) {
  	return __webpack_require__(webpackContextResolve(req));
  };
  function webpackContextResolve(req) {
  	return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  };
  webpackContext.keys = function webpackContextKeys() {
  	return Object.keys(map);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 82;


/***/ },
/* 83 */
/***/ function(module, exports) {

  module.exports = {"title":"O nás","component":"ContentPage","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing ELIT. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula Elementum\nlobortis. Maecenas Podělte, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, jn imperdiet Tellus libero efficitur Metus. Fusce sempre posuere\nligula, et facilisis Metus Bibendum interdum. Mauris na mauris sit amet SEM\npharetra commodo mezi EU a Leo. Nam při est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor Bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, jn maximus leo dignissim id.</p>\n<p>V HAC habitasse platea dictumst. Duis sagittis DUI AC ex suscipit maximus.\nMorbi pellentesque venenatis Felis sed convallis. Nulla varius, NIBH vitae\nplacerat Tempus, mauris sem Elementum ipsum, Eget sollicitudin nisl est vel\npurus. Fusce malesuada Odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam Quis est dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus Arcu. Donec vel mi dapibus. Mauris maximus\nposuere placerat. Sed et libero eu NIBH tristique mollis Eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus Justo Orci, molestie\nac sollicitudin ac, lobortis na Tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque AC efficitur gravida, Arcu lacus pharetra DUI, v\nconsequat elit Tellus auctor nulla. Donec placerat Elementum průměr, vitae\nimperdiet lectus luctus na adrese.</p>\n<p>Nullam eu feugiat mi. Quisque jn tristique nisl, dignissim výrok leo. Nam\nnon quam nisi. Donec rutrum turpis ac průměr blandit, id pulvinaru mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta NIBH. Sed id enim lectus. Suspendisse Elementum\nJusto Sapien, sit amet consequat Orci accumsan et. Podělte ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinaru, egestas Felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem Quis luctus. Proin sodales magna v lorem\nhendrerit Podělte. Integer varius eu Orci. Vestibulum ante ipsum primis v\nfaucibus Orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis v faucibus Orci luctus et ultrices posuere cubilia Curae; Ut v mauris\nNIBH. Suspendisse maximus ac eros na vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis v faucibus. Quisque egestas\ntortor et DUI consequat faucibus. Nunc vitae Odio ornare, venenatis ligula A,\nvulputate nisl. Aenean congue varius ex, sit amet Bibendum Odio posuere na adrese.\nNulla facilisi. V finibus, nulla vitae tincidunt ornare, Sapien nulla\nfermentum mauris, sed consectetur tortor Arcu Eget Arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 84 */
/***/ function(module, exports) {

  module.exports = {"title":"About Us","component":"ContentPage","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(2);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(80);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/privacy/index.js'; /**
                                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                         *
                                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                         *
                                                                                                         * This source code is licensed under the MIT license found in the
                                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                                         */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(81);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/privacy',

    action: function action(_ref) {
      var _this = this;

      var locale = _ref.locale;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    try {
                      resolve(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // eslint-disable-line import/no-dynamic-require
                    } catch (e) {
                      resolve(__webpack_require__(87));
                    }
                  }(__webpack_require__));
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 86 */
/***/ function(module, exports) {

  function webpackContext(req) {
  	throw new Error("Cannot find module '" + req + "'.");
  }
  webpackContext.keys = function() { return []; };
  webpackContext.resolve = webpackContext;
  module.exports = webpackContext;
  webpackContext.id = 86;


/***/ },
/* 87 */
/***/ function(module, exports) {

  module.exports = {"title":"Privacy Policy","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _promise = __webpack_require__(80);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/admin/index.js'; /**
                                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                       *
                                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                       *
                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                                       */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Admin Page';
  var isAdmin = false;

  exports.default = {

    path: '/admin',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Admin;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isAdmin) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', { redirect: '/login' });

              case 2:
                _context.next = 4;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    return resolve(__webpack_require__(89).default);
                  }(__webpack_require__));
                });

              case 4:
                Admin = _context.sent;
                return _context.abrupt('return', {
                  title: title,
                  chunk: 'admin',
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: _this
                    },
                    _react2.default.createElement(Admin, { title: title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: _this
                    })
                  )
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/admin/Admin.js'; /**
                                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                       *
                                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                       *
                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                                       */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Admin = function (_React$Component) {
    (0, _inherits3.default)(Admin, _React$Component);

    function Admin() {
      (0, _classCallCheck3.default)(this, Admin);
      return (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).apply(this, arguments));
    }

    (0, _createClass3.default)(Admin, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          'Admin Page'
        );
      }
    }]);
    return Admin;
  }(_react2.default.Component);

  Admin.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = Admin;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/notFound/index.js'; /**
                                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                          *
                                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                          *
                                                                                                          * This source code is licensed under the MIT license found in the
                                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                                          */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _NotFound = __webpack_require__(91);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Page Not Found';

  exports.default = {

    path: '*',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_NotFound2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        ),
        status: 404
      };
    }
    };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(23);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(24);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(25);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(26);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(27);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/cz2-mac-006/Projects/time4kids/time4kids-app/src/routes/notFound/NotFound.js'; /**
                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                             *
                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                             *
                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                             */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NotFound = function (_React$Component) {
    (0, _inherits3.default)(NotFound, _React$Component);

    function NotFound() {
      (0, _classCallCheck3.default)(this, NotFound);
      return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
    }

    (0, _createClass3.default)(NotFound, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          'Not Found Page'
        );
      }
    }]);
    return NotFound;
  }(_react2.default.Component);

  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = NotFound;

/***/ },
/* 92 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;

  var _redux = __webpack_require__(94);

  var _reduxThunk = __webpack_require__(95);

  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

  var _reducers = __webpack_require__(96);

  var _reducers2 = _interopRequireDefault(_reducers);

  var _createHelpers = __webpack_require__(101);

  var _createHelpers2 = _interopRequireDefault(_createHelpers);

  var _logger = __webpack_require__(102);

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function configureStore(initialState, helpersConfig) {
    var helpers = (0, _createHelpers2.default)(helpersConfig);
    var middleware = [_reduxThunk2.default.withExtraArgument(helpers)];

    var enhancer = void 0;

    if (true) {
      middleware.push((0, _logger2.default)());

      // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
      var devToolsExtension = function devToolsExtension(f) {
        return f;
      };
      if (false) {
        devToolsExtension = window.devToolsExtension();
      }

      enhancer = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), devToolsExtension);
    } else {
      enhancer = _redux.applyMiddleware.apply(undefined, middleware);
    }

    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (false) {
      module.hot.accept('../reducers', function () {
        return (
          // eslint-disable-next-line global-require
          store.replaceReducer(require('../reducers').default)
        );
      });
    }

    return store;
  }

/***/ },
/* 94 */
/***/ function(module, exports) {

  module.exports = require("redux");

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("redux-thunk");

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _redux = __webpack_require__(94);

  var _user = __webpack_require__(97);

  var _user2 = _interopRequireDefault(_user);

  var _runtime = __webpack_require__(98);

  var _runtime2 = _interopRequireDefault(_runtime);

  var _intl = __webpack_require__(100);

  var _intl2 = _interopRequireDefault(_intl);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = (0, _redux.combineReducers)({
    user: _user2.default,
    runtime: _runtime2.default,
    intl: _intl2.default
    });

/***/ },
/* 97 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = user;
  function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
      default:
        return state;
    }
    }

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(99);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _extends3 = __webpack_require__(2);

  var _extends4 = _interopRequireDefault(_extends3);

  exports.default = runtime;

  var _constants = __webpack_require__(69);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function runtime() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
      case _constants.SET_RUNTIME_VARIABLE:
        return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.payload.name, action.payload.value));
      default:
        return state;
    }
    }

/***/ },
/* 99 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(99);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _extends3 = __webpack_require__(2);

  var _extends4 = _interopRequireDefault(_extends3);

  exports.default = intl;

  var _constants = __webpack_require__(69);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function intl() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    if (state === null) {
      return {
        initialNow: Date.now()
      };
    }

    switch (action.type) {
      case _constants.SET_LOCALE_START:
        {
          var locale = state[action.payload.locale] ? action.payload.locale : state.locale;
          return (0, _extends4.default)({}, state, {
            locale: locale,
            newLocale: action.payload.locale
          });
        }

      case _constants.SET_LOCALE_SUCCESS:
        {
          return (0, _extends4.default)({}, state, {
            locale: action.payload.locale,
            newLocale: null,
            messages: (0, _extends4.default)({}, state.messages, (0, _defineProperty3.default)({}, action.payload.locale, action.payload.messages))
          });
        }

      case _constants.SET_LOCALE_ERROR:
        {
          return (0, _extends4.default)({}, state, {
            newLocale: null
          });
        }

      default:
        {
          return state;
        }
    }
    }

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(2);

  var _extends3 = _interopRequireDefault(_extends2);

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _stringify = __webpack_require__(55);

  var _stringify2 = _interopRequireDefault(_stringify);

  var _asyncToGenerator2 = __webpack_require__(3);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  exports.default = createHelpers;

  var _fetch = __webpack_require__(46);

  var _fetch2 = _interopRequireDefault(_fetch);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function createGraphqlRequest(fetchKnowingCookie) {
    return function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(query, variables) {
        var fetchConfig, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchConfig = {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({ query: query, variables: variables }),
                  credentials: 'include'
                };
                _context.next = 3;
                return fetchKnowingCookie('/graphql', fetchConfig);

              case 3:
                resp = _context.sent;

                if (!(resp.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                throw new Error(resp.statusText);

              case 6:
                _context.next = 8;
                return resp.json();

              case 8:
                return _context.abrupt('return', _context.sent);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function graphqlRequest(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return graphqlRequest;
    }();
  }

  function createFetchKnowingCookie(_ref2) {
    var cookie = _ref2.cookie;

    if (true) {
      return function (url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var isLocalUrl = /^\/($|[^/])/.test(url);

        // pass cookie only for itself.
        // We can't know cookies for other sites BTW
        if (isLocalUrl && options.credentials === 'include') {
          var headers = (0, _extends3.default)({}, options.headers, {
            cookie: cookie
          });
          return (0, _fetch2.default)(url, (0, _extends3.default)({}, options, { headers: headers }));
        }

        return (0, _fetch2.default)(url, options);
      };
    }

    return _fetch2.default;
  }

  function createHelpers(config) {
    var fetchKnowingCookie = createFetchKnowingCookie(config);
    var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

    return {
      fetch: fetchKnowingCookie,
      graphqlRequest: graphqlRequest,
      history: config.history
    };
    }

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createLogger;

  var _util = __webpack_require__(103);

  // Server side redux action logger
  function createLogger() {
    return function (store) {
      return function (next) {
        return function (action) {
          // eslint-disable-line no-unused-vars
          var formattedPayload = (0, _util.inspect)(action.payload, {
            colors: true
          });
          console.log(' * ' + action.type + ': ' + formattedPayload); // eslint-disable-line no-console
          return next(action);
        };
      };
    };
    }

/***/ },
/* 103 */
/***/ function(module, exports) {

  module.exports = require("util");

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setRuntimeVariable = setRuntimeVariable;

  var _constants = __webpack_require__(69);

  function setRuntimeVariable(_ref) {
    var name = _ref.name,
        value = _ref.value;

    return {
      type: _constants.SET_RUNTIME_VARIABLE,
      payload: {
        name: name,
        value: value
      }
    };
    } /* eslint-disable import/prefer-default-export */

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map