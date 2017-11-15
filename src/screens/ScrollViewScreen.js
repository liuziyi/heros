import React, { Component } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import ScrollViewListItem from '../components/ScrollViewListItem';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ScrollViewScreen extends Component {

	renderHeros(){
		return this.props.heros.map((hero,i) => {
			return (
				<ScrollViewListItem 
					key={hero.key} 
					hero={hero}
				/>
			)
		})

	}

	render(){
		return(
			<ScrollView>
				{this.renderHeros()}
			</ScrollView>
		)
	}
}

function mapStateToProps(state){
	return {
		heros: state.heros
	}
}

export default connect(mapStateToProps)(ScrollViewScreen);

