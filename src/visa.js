import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function VisaSelect() {

	return (
		<div className="visaContainer">
			<FormControl style={{marginTop: 16 }}>
				<InputLabel
					id="visa-select"
				>виза</InputLabel>
				<Select
					labelId="visa-select"
					id="visa-simple-select"
					style={{ width: 100 }}
					defaultValue="1"
				>
					<MenuItem value={1}>Не важно</MenuItem>
					<MenuItem value={2}>Без визы</MenuItem>
					<MenuItem value={3}>Нужна</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
