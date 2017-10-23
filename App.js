import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import OverviewScreen from './src/screens/OverviewScreen';
import HomeScreen from './src/screens/HomeScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageGalleryScreen from './src/screens/ImageGalleryScreen';
import AccountScreen from './src/screens/AccountScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

class App extends Component<{}> {
  render() {

    const MainNavigator = TabNavigator({
      Overview: { screen: OverviewScreen },
      Main: {
        screen: TabNavigator({
          Home: { screen: HomeScreen },
          ScrollView: { 
            screen: StackNavigator({
              ScrollView: {
                screen: ScrollViewScreen,
                navigationOptions: () => ({
                  title: 'ScrollView'
                })
              }
            }) 
          },
          FlatList: { 
            screen: StackNavigator({
              FlatList: {
                screen: FlatListScreen,
                navigationOptions: () => ({
                  title: "FlatList"
                })
              }
            }) 
          },
          Images: {
            screen: StackNavigator({
              Images: {
                screen: ImageGalleryScreen,
                navigationOptions: () => ({
                  title: "Image Gallery"
                })
              }
            })
          },
          Account: { 
            screen: StackNavigator({
              Account: { 
                screen: AccountScreen,
                navigationOptions: ({navigation}) => ({
                  title: 'Account',
                  headerRight: (
                    <Button
                      title="Settings"
                      onPress={() => navigation.navigate('Settings')}
                      backgroundColor="rgba(0,0,0,0)"
                      color="rgba(0,122,255,1)"
                    />
                  )
                })
              },
              Settings: { screen: SettingsScreen }
            })
          }
        })
      }
    },{
      navigationOptions: {
        tabBarVisible: false 
      }
    })

    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}


export default App;