import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import InfiniteScroll from "react-infinite-scroll-component"
import Button from '@material-ui/core/Button'

import { jsonData } from "./data.js"

class Container extends Component {
	constructor(props){
		super(props)

		this.data = jsonData.data.splice(0, 1000)
		this.page = 0
		this.dataitems = []
		this.state = { error: null,
			isLoaded: false,
			items: this.data.slice(this.page*20, this.page*20+20)
		}
	}

	fetchMoreData = () => {
		this.page++
		this.setState({
			items: this.state.items.concat(this.data.slice(this.page*20, this.page*20+20))
		})
	}

	componentDidMount() {
		console.log(this.data)
		/*fetch('http://5.181.109.26:8080/cheapest', {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrer: 'no-referrer'
		})
		.then((response) => response.json())
		.then((response) => {
			this.setState({items: response})
			this.setState({isLoaded: true})
		})
		.then((error) => {
			this.setState({false: true})
			this.setState({error})
		})*/
	}

	render (){

		return (
			<InfiniteScroll
				dataLength={this.state.items.length}
				next={this.fetchMoreData}
				hasMore={true}
				loader={<h4>Загрузка...</h4>}
			>
				{this.state.items.map((item, key) => (
					<Grid item xs={3} key={key}>
						<Paper className="travelCard">
							<div>
								<span className="where">{item.destination} на {item.nights} {item.nights<5?'ночи':'ночей'}</span>
							</div>
							<div>
								{item.meal_id > 0 ? (
									<span className="meal">с завтраками</span>
								) : (
									<span className="meal">без питания</span>
								)}
								{item.hotel_stars > 0 ? (
									<span className="stars">
										{
											Array.from(Array(item.hotel_stars)).map(() => <i>&#9733;</i>)
										}
									</span>
								) : (
									<span></span>
								)}
							</div>
							<div>
								<span className="price">{item.price} р.</span>
								<Button
									variant="text"
									color="secondary"
									size="medium"
								>
									<a className="hotellink" href={item.search_url} target="_blank">Искать</a>
								</Button>
							</div>
						</Paper>
					</Grid>
				))}
			</InfiniteScroll>
		)
	}

}

export default Container