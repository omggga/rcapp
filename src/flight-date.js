import "date-fns"
import moment from "moment"
import React from "react"
import Grid from "@material-ui/core/Grid"
import MomentUtils from "@date-io/moment"
import "moment/locale/ru"

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
	const [selectedDate, setSelectedDate] = React.useState(moment())

	function handleDateChange(date) {
		setSelectedDate(date)
	}

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					style={{ width: 150 }}
					disableToolbar
					variant="inline"
					format="DD.MM.YYYY"
					margin="normal"
					id="date-pickr-inline"
					label="вылет"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date"
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}
