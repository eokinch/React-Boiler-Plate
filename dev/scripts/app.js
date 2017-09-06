import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';

class App extends React.Component {
	render(){
		return(
			<h1>HELLO!!!</h1>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));