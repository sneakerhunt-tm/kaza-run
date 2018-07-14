import React from 'react';
import { Text } from 'react-native';
import { Redirect } from 'react-router-native';
import { connect } from 'react-redux';

import { loadAccountId } from '../store/userId/actions';

const AccountRedirect = class extends React.Component {
    constructor(props) {
        super();

        loadAccountId(props.dispatch);
    }

    render() {
        const { hasAccount } = this.props;

        if(hasAccount === '') {
            return <Text>Loading</Text>;
        }
        return hasAccount !== null ? <Redirect to="/matches" /> : <Redirect to="/register" />;
    }
}

export default connect((state) => ({
    hasAccount: state.userId,
}))(AccountRedirect);