import React, { Component } from 'react';
import { ScrollView, View, Dimensions, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ImageGalleryScreen extends Component {

	render(){
		return(
			<ScrollView>
				<View style={styles.containerStyle}>
					<Image style={styles.imageStyle} source={require('../images/stevejobs.jpg')} />
					<Image style={styles.imageStyle} source={require('../images/jackma.jpg')} />
				</View>
				<View style={styles.containerStyle}>
					<Image style={styles.imageStyle} source={require('../images/elonmusk.jpg')} />
					<Image style={styles.imageStyle} source={require('../images/jeffbezos.jpg')} />
				</View>
				<View style={styles.containerStyle}>
					<Image style={styles.imageStyle} source={require('../images/leekwanyew.jpg')} />
					<Image style={styles.imageStyle} source={require('../images/aynrand.jpg')} />
				</View>
			</ScrollView>
		)
	}
}

const styles = {
	containerStyle: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	imageStyle: {
		width: SCREEN_WIDTH/2,
		height: 200
	}
}


export default ImageGalleryScreen;