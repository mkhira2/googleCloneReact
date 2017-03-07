import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var MainContainer = React.createClass({
	render: function() {
		return (
			<div className="MainContainer">
				<div className="header">
				<div className="nav">
            		<div className="nav-icon">
                		<p>Gmail</p>
            		</div>
            	<div className="nav-icon">
                	<p>Images</p>
            	</div>
            	<div className="nav-icon"><i className="fa fa-th" aria-hidden="true"></i></div>
            	<div className="nav-icon"><i className="fa fa-bell" aria-hidden="true"></i></div>
            	<div className="nav-icon"><i className="fa fa-smile-o" aria-hidden="true"></i></div>
        		</div>
        		</div>
				<Title />
				<SearchMenu />
				<SearchIcon />
				<Icons />
			</div>
			)
	}
})

var Title = React.createClass({
	render: function() {
		return (
			<div className="title">
            <h1>G<span className="second">o</span><span className="third">o</span><span className="fourth">g</span><span className="fifth">l</span><span className="sixth">e</span></h1>
        	</div>
        	)
	}
})

var SearchMenu = React.createClass({
	render: function() {
		return (
			<div className="search-menu">
            <input type="text" className="search-bar"/>
        	</div>
			)
	}
})

var SearchIcon = React.createClass({
	render: function() {
		return (
			<div className="search-icon">
            	<i className="fa fa-microphone" aria-hidden="true"></i>
        	</div>
			)
	}
})

var Icons = React.createClass({
	render: function() {
		return (
			<div className="icons">
            	<button type="button" className="button-1">
                Google Search</button>
                <button type="button" className="button-2">
                    I'm Feeling Lucky</button>
        </div>
			)
	}
})

var app = function() {
	var libraryName = "react"
	ReactDOM.render(<MainContainer />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..