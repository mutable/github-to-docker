var React = require("react")
var Router = require("react-router")
var Link = Router.Link

var Header = React.createClass({
  displayName: "Header",

	render: function () {
		return (
			<div className="mainHeader">
				<div className="container">
					<Link to="/">
            <span className="header-title">ContainerFactory.io</span>
          </Link>
				</div>
			</div>
		)
	}
})

module.exports = Header
 