import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

import CountrySelect from './where-to-go'

function Header() {

	return (
		<AppBar size="medium" position="static" color="inherit" style={{ margin: 20 }}>
			<Box style={{ height: 90, backgroundColor: '#65c8d0' }}>
				<div className="form">
					<div className="form-item">
						<CountrySelect />
					</div>
				</div>
			</Box>
		</AppBar>
	)
}

export default Header