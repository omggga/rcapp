import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './header'
import Content from './content'

import './App.css'

const App = () => (
	<Container maxWidth="lg">
		<Header />
		<Content />
	</Container>
)
export default App
