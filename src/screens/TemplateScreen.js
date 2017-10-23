import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class TemplateScreen extends Component {

	render(){
		return(
			<View style={styles.containerStyle}>
				<Text style={styles.textStyle}>Template</Text>
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH,
		backgroundColor: '#fff'
	},
	textStyle: {
		fontSize: 30
	}
}


export default TemplateScreen;