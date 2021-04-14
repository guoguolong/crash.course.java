import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Avatar, Typography } from 'antd';
import 'antd/dist/antd.css';
import { ImageField } from 'koda-react-widgets';
export default () => {
  // console.log('ImageField', ImageField())
  const formD = {
    group: 'Love',
    image: 'http://www.koda.cn',
  };

  return (
    <>
        <Form labelCol={{span: 8}} wrapperCol={{span: 4}} 
        name="basicForm"
        initialValues={formD}
        >
          <Form.Item name="group" label="Group Name2" >
            <Input />
          </Form.Item>
          <Form.Item name="image" label="Image Name" >
            <ImageField />
          </Form.Item>
        </Form>
    </>
  );
};