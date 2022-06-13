import React from 'react';
import './PersonalData.scss';

import { Form, Input, InputNumber } from 'antd';
import Title from 'antd/lib/typography/Title';

const PersonalData: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Title level={2} className='product-form'>
        Оформить заказ
      </Title>
      <Form form={form} layout='vertical' onFinish={onFinish} scrollToFirstError>
        <Form.Item name='name' label='Имя' rules={[{ required: false }]}>
          <Input style={{ width: 320, height: 44 }} placeholder='Введите имя' />
        </Form.Item>
        <Form.Item name='phone' label='Телефон' rules={[{ required: false }]}>
          <InputNumber style={{ width: 320, height: 44, paddingTop: 5 }} placeholder='87771234567' />
        </Form.Item>
        <Form.Item
          name='email'
          label='Адрес электронной почты'
          rules={[{ type: 'email', message: 'Введен некорректный адрес эл.почты!' }, { required: false }]}
        >
          <Input style={{ width: 320, height: 44 }} placeholder='Введите e-mail' />
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalData;
