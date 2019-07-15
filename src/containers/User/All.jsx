import PropTypes from 'prop-types';
import React, { Component } from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';

import Form from './Form';
import List from './List';
import { onRemoveRequest, onSearchRequest } from './actions';

class All extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { location } = this.props;
    const newProps = qs.parse(location.search);
    const { onSubmit, onRemove } = this.props;
    return (
      <div className="all-user-containers">
        <Form
          onSubmit={this.onSubmit}
          initialValues={newProps}
        />
        <List
          dataSource={{}}
          keyword={newProps.s}
          onRemove={onRemove}
          onReload={() => onSubmit(newProps)}
        />
      </div>
    );
  }
}

export const mapStateToProps = () => {};

export const mapDispatchToProps = dispatch => ({
  onSubmit: s => dispatch(onSearchRequest(s)),
  onRemove: s => dispatch(onRemoveRequest(s)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(All);
