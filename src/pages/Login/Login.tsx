import './Login.scss';

import React, { useState } from 'react';

import { Button, Form, Input } from 'antd';

import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { useActions } from '../../hooks/useAction';

const Login: React.FC = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    email: '',
  });
  const { signInUser } = useActions();
  const { sendNewPassword } = useActions();

  const [login, setLogin] = useState(true);

  const submitFormHandler = () => {
    if (login) {
      signInUser(state);
    } else {
      sendNewPassword(state.email);
      setLogin(true);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className='Form'>
      <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={submitFormHandler}>
        <h2 className='Form-header'>Вход</h2>
        <Form.Item
          name='email'
          rules={[{ type: 'email', required: true, message: 'Пожалуйста, укажите верный email!' }]}
        >
          <Input
            name='email'
            className='form_input'
            prefix={<MailOutlined className='site-form-item-icon' />}
            type='text'
            onChange={inputChangeHandler}
            placeholder='Укажите ваш email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={login ? [{ required: true, message: 'Пожалуйста, укажите верный пароль!' }] : [{ required: false }]}
        >
          <Input
            name='password'
            className='form_input'
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            onChange={inputChangeHandler}
            placeholder='Введите пароль'
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
