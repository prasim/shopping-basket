import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import App from './App.jsx'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

const AppNew = () => (
		<MuiThemeProvider>
			<MyAwesomeReactComponent/>
		</MuiThemeProvider>
	);

render(
	<div>
			<AppNew />
	</div>
	,
	rootElement
)
