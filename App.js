import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native'

import { Provider } from 'react-redux';
import store from './store/store';

import Jdun from './pages/Jdun';
import Register from './pages/Register';
import Match from './pages/Match';
import MatchSucces from './pages/MatchSucces';
import Runer from './pages/Runer';
import AccountRedirect from './pages/AccountRedirect';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={AccountRedirect} />
            <Route path="/register" component={Register} />
            <Route path="/jdun/:id" component={Jdun} />
            <Route path="/runer/:id" component={Runer} />
            <Route path="/matchSucces/:id" component={MatchSucces} />
            <Route path="/matches" component={Match} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
