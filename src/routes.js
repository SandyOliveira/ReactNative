import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from "./pages/product";

const NavStack = createStackNavigator({
//export default createStackNavigator({
    Main,
    Product
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },

});

const App = createAppContainer(NavStack);

export default App;