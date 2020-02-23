import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	root: {

		focused: {
			color: '#fff !important'
		}

	},
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18
		}
	}
})

export default function CountrySelect() {
	const classes = useStyles()

	countriesRu.sort((a, b) => a.name.localeCompare(b.name))

	return (
		<Autocomplete
			id="country-select-demo"
			size="small"
			style={{ width: 200 }}
			options={countriesRu}
			classes={{
				option: classes.option,
			}}
			autoHighlight
			getOptionLabel={option => option.name}
			renderOption={option => (
				<React.Fragment>{option.name}</React.Fragment>
			)}
			renderInput={params => (
				<TextField {...params}
					label="Выберите страну"
					variant="standard"
					fullWidth
					inputProps={{...params.inputProps, autoComplete: 'new-password'}}
				/>
			)}
		/>
	)
}

const countriesRu = [
	{"name": "Абхазия", "lt_id": "AB", "tl_id": "1", "visa": "Без визы"},
	{"name": "Азербайджан", "lt_id": "null", "tl_id": "119", "visa": "Без визы"},
	{"name": "Албания", "lt_id": "AL", "tl_id": "120", "visa": "Без визы"},
	{"name": "Армения", "lt_id": "AM", "tl_id": "6", "visa": "Без визы"},
	{"name": "Бахрейн", "lt_id": "BH", "tl_id": "10", "visa": "Без визы"},
	{"name": "Беларусь", "lt_id": "BY", "tl_id": "11", "visa": "Без визы"},
	{"name": "Вьетнам", "lt_id": "VN", "tl_id": "22", "visa": "Без визы"},
	{"name": "Грузия", "lt_id": "null", "tl_id": "129", "visa": "Без визы"},
	{"name": "Доминикана", "lt_id": "DO", "tl_id": "28", "visa": "Без визы"},
	{"name": "Египет", "lt_id": "EG", "tl_id": "29", "visa": "Без визы"},
	{"name": "Израиль", "lt_id": "IL", "tl_id": "32", "visa": "Без визы"},
	{"name": "Индонезия", "lt_id": "ID", "tl_id": "34", "visa": "Без визы"},
	{"name": "Иордания", "lt_id": "JO", "tl_id": "35", "visa": "Без визы"},
	{"name": "Катар", "lt_id": "null", "tl_id": "135", "visa": "Без визы"},
	{"name": "Кения", "lt_id": "null", "tl_id": "42", "visa": "Без визы"},
	{"name": "Куба", "lt_id": "CU", "tl_id": "48", "visa": "Без визы"},
	{"name": "Маврикий", "lt_id": "MU", "tl_id": "53", "visa": "Без визы"},
	{"name": "Малайзия", "lt_id": "null", "tl_id": "55", "visa": "Без визы"},
	{"name": "Мальдивы", "lt_id": "MV", "tl_id": "56", "visa": "Без визы"},
	{"name": "Марокко", "lt_id": "MA", "tl_id": "59", "visa": "Без визы"},
	{"name": "Оман", "lt_id": "OM", "tl_id": "69", "visa": "Без визы"},
	{"name": "Сейшелы", "lt_id": "SC", "tl_id": "78", "visa": "Без визы"},
	{"name": "Танзания", "lt_id": "TZ", "tl_id": "88", "visa": "Без визы"},
	{"name": "Тунис", "lt_id": "TN", "tl_id": "91", "visa": "Без визы"},
	{"name": "Филиппины", "lt_id": "null", "tl_id": "97", "visa": "Без визы"},
	{"name": "Черногория", "lt_id": "ME", "tl_id": "104", "visa": "Без визы"},
	{"name": "Ямайка", "lt_id": "null", "tl_id": "117", "visa": "Без визы"},
	{"name": "ОАЭ", "lt_id": "AE", "tl_id": "68", "visa": "Без визы"},
	{"name": "Россия", "lt_id": "RU", "tl_id": "76", "visa": "Без визы"},
	{"name": "Таиланд", "lt_id": "TH", "tl_id": "87", "visa": "Без визы"},
	{"name": "Турция", "lt_id": "TR", "tl_id": "92", "visa": "Без визы"},
	{"name": "Шри-Ланка", "lt_id": "LK", "tl_id": "110", "visa": "Без визы"},
	{"name": "Индия", "lt_id": "IN", "tl_id": "33", "visa": "Онлайн-виза"},
	{"name": "Кипр", "lt_id": "CY", "tl_id": "43", "visa": "Онлайн-виза"},
	{"name": "Мексика", "lt_id": "MX", "tl_id": "60", "visa": "Онлайн-виза"},
	{"name": "Австрия", "lt_id": "AT", "tl_id": "3", "visa": "Виза"},
	{"name": "Андорра", "lt_id": "AD", "tl_id": "4", "visa": "Виза"},
	{"name": "Болгария", "lt_id": "BG", "tl_id": "13", "visa": "Виза"},
	{"name": "Венгрия", "lt_id": "HU", "tl_id": "20", "visa": "Виза"},
	{"name": "Германия", "lt_id": "null", "tl_id": "24", "visa": "Виза"},
	{"name": "Греция", "lt_id": "GR", "tl_id": "26", "visa": "Виза"},
	{"name": "Испания", "lt_id": "ES", "tl_id": "38", "visa": "Виза"},
	{"name": "Италия", "lt_id": "IT", "tl_id": "39", "visa": "Виза"},
	{"name": "Камбоджа", "lt_id": "null", "tl_id": "41", "visa": "Виза"},
	{"name": "Китай", "lt_id": "null", "tl_id": "44", "visa": "Виза"},
	{"name": "Мальта", "lt_id": "MT", "tl_id": "57", "visa": "Виза"},
	{"name": "Нидерланды", "lt_id": "null", "tl_id": "65", "visa": "Виза"},
	{"name": "Норвегия", "lt_id": "NO", "tl_id": "67", "visa": "Виза"},
	{"name": "Португалия", "lt_id": "PT", "tl_id": "75", "visa": "Виза"},
	{"name": "Франция", "lt_id": "FR", "tl_id": "99", "visa": "Виза"},
	{"name": "Хорватия", "lt_id": "HR", "tl_id": "101", "visa": "Виза"},
	{"name": "Чехия", "lt_id": "CZ", "tl_id": "105", "visa": "Виза"}
]