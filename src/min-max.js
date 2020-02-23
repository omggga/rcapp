import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function MinMax() {

	return (
		<div className="minMaxContainer">
			<TextField
				label="ночей"
				defaultValue="7"
				type="number"
				style={{ width: 35 }}
				variant="standard"
				/>
			<span className="minMaxDelimiter">-</span>
			<TextField
				label="&nbsp;"
				defaultValue="14"
				type="number"
				style={{ width: 35 }}
				variant="standard"
			/>
		</div>
	)
}
