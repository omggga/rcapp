import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function Humans() {

	return (
		<div className="minMaxContainer">
			<TextField
				label="взрослые"
				defaultValue="2"
				type="number"
				style={{ width: 35 }}
				variant="standard"
				/>
		</div>
	)
}
