import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from './UserForm';
import { onCreateRequest } from './actions';

class AddUser extends Component {
   static propTypes = {
     history: PropTypes.object,
     onCreate: PropTypes.func.isRequired,
   };

  onSubmit = (e) => {
    const { history, onCreate } = this.props;
    onCreate(e.toJS(), () => history.push('/'));
  };

  render() {
    return (
      <div className="add-user-containers">
        <Form
          isNew
          onSubmit={this.onSubmit}
          initialValues={{ role: 'user', gender: 'male' }}
          caption="Add new user"
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  onCreate: (item, cb) => dispatch(onCreateRequest(item, cb)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(AddUser),
);
