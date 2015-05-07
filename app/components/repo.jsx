var request = require("superagent")
var React = require("react");
var Router = require("react-router");
var Navigation = Router.Navigation
var RouteHandler = Router.RouteHandler;
var Link = Router.Link
var ghUrl = require('github-url-to-object')

var Repo = React.createClass({
	displayName: "Repo",
	contextTypes: {
		router: React.PropTypes.func
	},

	 mixins: [Navigation],

	getInitialState: function () {
		return {
      repos: []
      , isLoading: false
      , error: ""
      ,repo:""
  		,branch:""
  		,user:""
  		,private:""}
	},

	componentDidMount: function () {
		var that = this;
    that.setState({ isLoading: true})

		if(this.isMounted()) {
			request
		    .get("/api/v1/repos")
		    .end(function (error, res) {              
		      if(error){
            that.setState({ error: error})
		      } else{
		      	that.setState({
              repos: res.body.result
              , isLoading: false
            })
		      }

		    })
		}
	}, changeGhUrl:function(event){
	    var git = ghUrl( event.target.value)
	    if(git){
	    	this.setState({repo: git.repo, user: git.user, branch: git.branch})
	    }
	  },
	goToGHRepo:function(){
		   event.preventDefault()
		   ga('send', 'event', 'button', 'click', 'usepublicGH')
		if(this.state.repo && this.state.user && this.state.branch)
			this.transitionTo("single",{repo: this.state.repo, user: this.state.user, branch: this.state.branch,private:"false"})
	},
	createRepoNodes: function (repos) {	

		var nodes = repos.map(function (repos) {
			var url = "/#/repo/" + repos.full_name+"/"+repos.branch+"/"+repos.private;

      return (
				<div className="col-sm-6">

          <a href={url} className="singleRepo" >
            <h5 className="repoName">{repos.full_name}
              <small className="text-uppercase">{repos.private ? " Private": " Public"}</small>
            </h5>

            <p>URL: {repos.url}</p>
          </a>

        </div>
			);

		});

		return nodes;
	},
	render: function () {		

    var listRepos = this.createRepoNodes(this.state.repos)

		return (
			<div className="repo">

				<div className="hero">
          <h2>Step 1: Select a repository</h2>
				</div>

        <div className="break">
          <div className="container">
            <h5 className="break-header">Load a public repository</h5>
          </div>
        </div>

        <div className="container">

          <form className="form-horizontal"  onSubmit={this.goToGHRepo}>

            <div className="form-group">
              <label className="col-sm-2 control-label">GitHub Repository URL</label>
              <div className="col-sm-8">
                <input className="form-control"  type="text" onChange={this.changeGhUrl} placeholder="https://github.com/lsqio/container-factory/tree/master" />
              </div>
              <div className="col-sm-2">
                <input className="form-control"  type="submit" value="Next" disabled={(!this.state.repo || !this.state.user || !this.state.branch)}  />
              </div>
            </div>

          </form>

        </div>


				<div className="break">
          <div className="container">
            <h5 className="break-header">Your GitHub Repositories – Click to select</h5>
          </div>
				</div>

				<div className="container">


          <div className="row">

            {this.state.isLoading ?
              <h5 className="loading-text">Loading your repos...</h5>
              :
              {listRepos}
            }


          </div>
				</div>        
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Repo;