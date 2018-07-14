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

        if(hasAccount === null) {
            return <Redirect to="/register" />;
        }
        return hasAccount.id !== undefined ? <Redirect to="/matches" /> : <Text>Loading</Text>;
    }
}

export default connect((state) => ({
    hasAccount: state.userId,
}))(AccountRedirect);