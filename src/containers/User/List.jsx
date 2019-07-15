import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Avatar, Button, List, Modal,
} from 'antd';
import { withRouter } from 'react-router-dom';

class UserList extends Component {
  form = React.createRef();

  static defaultProps = {
    keyword: '',
  };

  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    dataSource: PropTypes.array.isRequired,
    history: PropTypes.object,
    keyword: PropTypes.string,
  };

  onRemove = (item) => {
    Modal.confirm({
      title: 'Confirm delete?',
      content: 'Are you sure want to delete this user?',
      okText: 'Yes',
      cancelText: 'Cancel',
      onOk: () => {
        const { onRemove: onRemove1 } = this.props;
        onRemove1(item.id);
      },
    });
  };

  renderItem = item => (
    <List.Item>
      <List.Item.Meta
        title={(
          <div>
            {item.name}
            <span> (role - {item.role})</span>
          </div>
        )}
        avatar={(
          <Avatar
            size="large"
          >{(item.name || '').charAt(0)}
          </Avatar>
        )}
        description={item.email}
      />
      <div className="action">
        <Button
          key="view"
          icon="eye"
          size="small"
          shape="circle"
          type="primary"
          className="btn"
          style={{ marginRight: 5 }}
          onClick={() => {}}
        />
        <Button
          key="remove"
          size="small"
          shape="circle"
          type="danger"
          icon="close"
          className="btn"
          onClick={() => this.onRemove(item)}
        />
      </div>
    </List.Item>
  );

  render() {
    const { dataSource, keyword = '' } = this.props;
    const { history } = this.props;

    return (
      <div className="list-user-containers">
        {keyword && <h1>Search of {keyword}</h1>}
        <Button
          type="primary"
          onClick={() => history.push('/users/add')}
        >
          Add User
        </Button>
        <List dataSource={dataSource} renderItem={this.renderItem} />
      </div>
    );
  }
}

export default withRouter(UserList);
