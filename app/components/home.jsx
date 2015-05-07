var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler
var Link = Router.Link

var Home = React.createClass({
  displayName: "Home",

  render: function () {

    return (

      <div className="landing">

        <div className="hero">

          <div className="container">
            <h1 className="hidden-xs">Container Factory</h1>
            <h2>Turn your Github repo into a published container image</h2>

            <ul className="list-inline imageRow hidden-xs">
              <li className="hero-image">
                <div className="text-center">
                  <i className='githubLogo'></i>
                  <h2>source code </h2>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <i className='arrowImage'></i>
                </div>
              </li>
              <li className="hero-image">
                <div className="text-center">
                  <i className='dockerLogo'></i>
                  <h2>docker image</h2>
                </div>
              </li>
            </ul>

          </div>

          <div className="text-center get-started">
            <a href="/auth/github" className="gitlogin">
              <i></i> Get started
            </a>
          </div>

        </div>

        <div className="break-home text-center">
          <div className="container">
            <div className="row">

              <div className="col-sm-4">
                <h2>1. Select a GitHub repository</h2>
                <p>If your repository contains a NodeJS project we will add a pre-built Dockerfile for you. If your repository does not contain a NodeJS project you will need to add a Dockerfile before using Container Factory (&nbsp;
                  <a className="instruction-link" href="https://github.com/dockerfile" target="_blank">Dockerfile examples</a>&nbsp;). We plan on adding more languages to the automated build process, and you can help by contributing to &nbsp;
                  <a className="instruction-link" href="https://github.com/lsqio/container-factory" target="_blank">Container Factory</a>.</p>
              </div>

              <div className="col-sm-4">
                <h2>2. Provide your registry credentials</h2>
                <p>Enter your credentials from your favorite container registry. You'll need your email address, your username and your password. If you do not have an account with a container registry you will need to &nbsp;
                  <a className="instruction-link" href="https://hub.docker.com" target="_blank">create one</a>.</p>
              </div>

              <div className="col-sm-4">
                <h2>3. Collect your container!</h2>
                <p>In about a minute, your project will be available as a container in your container registry!</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Home;