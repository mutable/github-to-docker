var React = require("react")
var Router = require("react-router")
var RouteHandler = Router.RouteHandler
var Header = require("./header.jsx")
var Footer = require("./footer.jsx")
var ga = require('react-google-analytics');
var GAInitiailizer = ga.Initializer;
var App = React.createClass({
  displayName: "App",

  render: function () {
    return (
      <div className="MainAppWrap">
        <GAInitiailizer />
        <Header />

        <RouteHandler {...this.props} />

        <Footer />

      </div>
    );
  }
});

module.exports = App;