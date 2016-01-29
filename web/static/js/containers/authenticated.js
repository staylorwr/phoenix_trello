import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentUser } = this.props;

    if (localStorage.getItem('phoenixAuthToken')) {
      if (!currentUser) dispatch(Actions.currentUser());
    } else {
      dispatch(routeActions.push('/sign_up'));
    }
  }

  render() {
    const { currentUser, dispatch, socket, currentBoard } = this.props;

    if (!currentUser) return false;

    return (
      <div id="authentication_container" className="application-container">

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(AuthenticatedContainer);
