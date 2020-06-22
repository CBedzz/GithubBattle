import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>Hello World!</div>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
