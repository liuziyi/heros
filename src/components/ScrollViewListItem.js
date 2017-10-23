import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Button } from 'react-native-elements';

import Card from './Card';
import CardSection from './CardSection';

class ListItem extends Component {
	
	moreDetails(){
		Linking.openURL(this.props.hero.url)
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Image style={styles.imageStyle} source={{ uri: this.props.hero.image }} />
				</CardSection>
				<CardSection>
					<View style={styles.thumbnailContainerStyle}>
						<Image style={styles.thumbnailStyle} source={{ uri: this.props.hero.image }} />
					</View>
					<View style={styles.headerContainerStyle}>
						<Text style={styles.headerTextStyle}>{this.props.hero.name}</Text>
						<Text>{this.props.hero.details}</Text>
					</View>
				</CardSection>
				<CardSection>
					<Button
						title="More Details"
						onPress={this.moreDetails.bind(this)}
						buttonStyle={styles.buttonStyle}
					/>
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	headerContainerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 20
	},
	buttonStyle: {
		width: 310,
		borderRadius: 5,
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: 'black'
	}
}

export default ListItem;