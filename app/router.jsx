var React = require("react")
var Router = require("react-router")
var request = require("superagent")

var App = require("../app/components/app.jsx")
var Home = require("../app/components/home.jsx")
var Repo = require("../app/components/repo.jsx")
var Single = require("../app/components/single.jsx")

var NotFound = require("../app/components/notfound.jsx")

var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute

ga('create', 'UA-62553627-1', 'auto')


var routes = (
	<Route handler={App} path="/">
		<DefaultRoute name="app" handler={Home} />

		<Route name="repo" path="repo" handler={Repo} />
		<Route name="single" path="repo/:user/:repo/:branch/:private" handler={Single} />

		<NotFoundRoute handler={NotFound} />
	</Route>
)


Router.run(routes, function (Handler,state) {
	React.render(<Handler />, document.getElementById("www"))
	ga('send', 'pageview',state.path)
})