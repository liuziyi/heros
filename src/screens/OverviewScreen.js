import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import Slides from '../components/Slides';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SLIDE_DATA = [
	{ id: 1, text: "Welcome", color: 'black' },
	{ id: 2, text: "Influencers", color: 'black' },
	{ id: 3, text: "Heros", color: 'black' }
]

class OverviewScreen extends Component {

	onSlidesComplete(){
		this.props.navigation.navigate('Home');
	}

	render(){
		return(
			<Slides
				data={SLIDE_DATA}
				onComplete={this.onSlidesComplete.bind(this)}
			/>
		)
	}
}


export default OverviewScreen;