import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import FlatListItem from '../components/FlatListItem';

class FlatListScreen extends Component {

	renderItem({item}){
		return <FlatListItem key={item.key} data={item} />
	}

	render(){
		return(
			<View>
				<FlatList
					data={this.props.heros}
					renderItem={this.renderItem}
				>
				</FlatList>
			</View>
		)
	}
}

function mapStateToProps(state){
	return {
		heros: state.heros
	}
}

export default connect(mapStateToProps)(FlatListScreen);