import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Spin, Button } from 'antd';
import { Field, reduxForm } from 'redux-form/immutable';
import validator from 'validator';

import renderInput from '../../components/Form/Fields/input';
import renderSelect from '../../components/Form/Fields/select';

class UserForm extends Component {
  _form = React.createRef();

  static propTypes = {
    caption: PropTypes.string,
    handleSubmit: PropTypes.func,
    isNew: PropTypes.bool,
    submitting: PropTypes.bool
  };

  render() {
    const {
      isNew, caption, handleSubmit, submitting,
    } = this.props;
    const roles = ['admin', 'practitioner', 'user'].map(key => ({
      label: key,
      key,
    }));
    const genders = ['male', 'female', 'other'].map(key => ({
      label: key,
      key,
    }));

    return (
      <Form
        ref={this._form}
        onSubmit={handleSubmit}
        className="user-form-user-containers normal-form"
      >
        <Spin spinning={submitting} tip="Submitting...">
          <h1 className="center">{caption}</h1>
          <Field
            name="email"
            hasFeedback
            component={renderInput}
            disabled={submitting || !isNew}
            label="Email"
            placeholder="john.doe@gmail.com"
          />
          <Field
            hasFeedback
            name="name"
            component={renderInput}
            disabled={submitting}
            label="Name"
            placeholder="John Doe"
          />
          <Field
            hasFeedback
            type="password"
            name="password"
            component={renderInput}
            disabled={submitting}
            label="Password"
            placeholder="Password"
          />
          {isNew && (
            <Field
              hasFeedback
              type="password"
              name="confirmPassword"
              component={renderInput}
              label="Confirm Password"
              placeholder="Confirm Password"
            />
          )}
          <Field
            hasFeedback
            name="gender"
            options={genders}
            defaultValue="other"
            disabled={submitting}
            component={renderSelect}
            label="Gender"
            placeholder="Select your Gender"
          />
          <Field
            hasFeedback
            name="role"
            options={roles}
            defaultValue="user"
            disabled={submitting}
            component={renderSelect}
            label="Role"
            placeholder="Role"
          />
          <div className="center">
            <Button
              type="primary"
              htmlType="submit"
              className="btn-submit"
              disabled={submitting}
            >
              Save
            </Button>
          </div>
        </Spin>
      </Form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = "Email can't be blank";
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = 'Email is invalid';
  }

  if (values.get('id') === 'is-new') {
    if (!values.get('password')) {
      errors.password = "Password can't be blank";
    }

    if (!values.get('confirmPassword')) {
      errors.confirmPassword = "Confirm password can't be blank";
    }

    if (
      values.get('password')
      && values.get('confirmPassword')
      && values.get('password') !== values.get('confirmPassword')
    ) {
      errors.confirmPassword = "Confirm password didn't match";
    }
  }

  if (!values.get('name')) {
    errors.name = "Name can't be blank";
  }

  return errors;
};

export default reduxForm({
  form: 'user-form',
  enableReinitialize: true,
  validate,
})(UserForm);
