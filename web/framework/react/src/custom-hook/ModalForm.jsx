import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography } from 'antd';

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  // console.log('[DEBUG] 111111')
  useEffect(() => {
    prevVisibleRef.current = visible;
    // console.log('[DEBUG] H.22222')
  }, [visible]);
  // console.log('[DEBUG] 3333333')
  const prevVisible = prevVisibleRef.current;
  // console.log('[DEBUG] 333333.5555 form, visible>>>', form, prevVisible, visible)
  useEffect(() => {
    // console.log('[DEBUG] H.4444444')
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
  // console.log('[DEBUG] 55555')
};

export default ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  // console.log('[DEBUG] hook后渲染');
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="name"
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="User Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};