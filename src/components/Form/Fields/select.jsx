import PropTypes from 'prop-types';
import React from 'react';
import { Form, Select } from 'antd';

const newComponent = (props) => {
  const {
    input, meta, hasFeedback, options, label, ...rest
  } = props;
  const hasError = meta.touched && meta.invalid;

  return (
    <Form.Item
      label={label}
      help={hasError && meta.error}
      hasFeedback={hasFeedback && hasError}
      validateStatus={hasError ? 'error' : 'success'}
    >
      <Select {...input} {...rest}>
        {options.map(item => (
          <Select.Option key={item.key}>{item.label}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

newComponent.propTypes = {
  hasFeedback: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.node,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
  }).isRequired,
  options: PropTypes.any,
  type: PropTypes.string,
};

export default newComponent;
