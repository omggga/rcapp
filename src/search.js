import React from 'react'
import Button from '@material-ui/core/Button'

export default function Search() {

	return (
		<div className="searchButton">
			<Button
				variant="contained"
				color="primary"
				size="medium"
			>
				Искать
			</Button>
		</div>
	)
}
