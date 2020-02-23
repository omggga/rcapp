import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

import CountrySelect from './country-select'
import FlightDate from './flight-date'
import MinMax from './min-max'
import Visa from './visa'
import Humans from './humans'
import SearchButton from './search'

function Header() {

	return (
		<AppBar size="medium" position="static" color="inherit" style={{ marginTop: 20, marginBottom: 20 }}>
			<Box style={{ height: 90, backgroundColor: '#65c8d0', padding: 0 }} display="flex" flexDirection="row">
				<Box style={{ marginTop: 19, marginLeft: 20, marginRight: 30 }}>
					<CountrySelect />
				</Box>
				<Box style={{ marginRight: 30 }}>
					<FlightDate />
				</Box>
				<Box style={{ marginRight: 30 }}>
					<MinMax />
				</Box>
				<Box style={{ marginRight: 30 }}>
					<Visa />
				</Box>
				<Box>
					<Humans />
				</Box>
				<Box alignSelf="center" style={{ margin: '0 auto', marginRight: 40 }}>
					<SearchButton />
				</Box>
			</Box>
		</AppBar>
	)
}

export default Header