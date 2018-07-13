import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native'

import Jdun from './pages/Jdun';
import Register from './pages/Register';
import Match from './pages/Match';
import MatchSucces from './pages/MatchSucces';
import Runer from './pages/Runer';


const hasAccount = false;

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={()=>(hasAccount ? <Redirect to="/matches" /> : <Redirect to="/register" />)} />
          <Route path="/register" component={Register} />
          <Route path="/jdun/:id" component={Jdun} />
          <Route path="/runer/:id" component={Runer} />
          <Route path="/matchSucces/:id" component={MatchSucces} />
          <Route path="/matches" component={Match} />
          <Link to="/" ><Text>Main</Text></Link>
          <Link to="/jdun/1" ><Text>Jdun</Text></Link>
          <Link to="/runer/2" ><Text>Runer</Text></Link>
          <Link to="/matchSucces/3" ><Text>Match Succes</Text></Link>
          <Link to="/matches" ><Text>Matches</Text></Link>
        </View>
      </NativeRouter>
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
