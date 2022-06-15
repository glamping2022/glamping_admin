import React, { useState } from 'react';

import {
  Button,
  Form,
  Input,
  Typography,
  Upload,
} from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { UploadFile } from 'antd/lib/upload/interface';
import { useHistory } from 'react-router-dom';

import { UploadOutlined } from '@ant-design/icons';

import GoBack from '../../../../components/Buttons/GoBack/GoBack';
import { useActions } from '../../../../hooks/useAction';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const { TextArea } = Input;

const { Title } = Typography;

export interface UploadChangeParam {
  // file: T;
  fileList: Array<UploadFile>;
  event?: {
    percent: number;
  };
}

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};


const NewPitch: React.FC = () => {
  const history = useHistory();
  const { createPitch } = useActions();
  const [disable, setDisable] = useState(false);
  const [form] = Form.useForm();

  const formData = new FormData();

  const onFinish = (values: any) => {
    const data = { ...values };
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const arrayImage = [];
    for (let i = 0; i < values.upload.length; i++) {
      arrayImage[i] = values.upload[i].originFileObj;
    }
    console.log(arrayImage);
    for (const file of arrayImage) {
      formData.append('files', file);
      console.log(formData.get('files'));
    }
    {
      createPitch(formData);
    }
    setDisable(true);
    history.goBack();
  };


  return (
    <div className='pitch__detail'>
      <Form className='newProduct__form' form={form} name='dynamic_rule' onFinish={onFinish} {...formItemLayout}>
        <Title level={1} style={{ fontWeight: 500, fontSize: '28px', lineHeight: '36px' }}>
          Создать питчу
        </Title>
        <Title level={3} style={{ margin: '0', fontWeight: 500, fontSize: '18px', lineHeight: '24px' }}>
          Опишите питчу
        </Title>
        <Paragraph style={{ fontSize: '14px', lineHeight: '24px', color: '#808080' }} {...formItemLayout}>
          Поля со звездочкой <span style={{ color: '#FF4D4F' }}>*</span> — обязательные
        </Paragraph>
        <Form.Item
          {...formItemLayout}
          label='Цена'
          name='price'
          rules={[
            {
              required: true,
              message: 'Укажите цену!',
            },
          ]}
        >
          <Input className='product-cost' style={{ width: '65%', paddingLeft: 25 }} placeholder='Введите цену' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='title'
          label='Название'
          rules={[
            {
              required: true,
              message: 'Укажите название!',
            },
          ]}
        >
          <Input placeholder='Введите название' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='description'
          label='Описание'
          rules={[
            {
              required: true,
              message: 'Укажите описание!',
            },
          ]}
        >
          <TextArea rows={4} name='Note' className='form_input' placeholder='Введите описание' />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='upload'
          label='Фото'
          valuePropName='fileList'
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Загрузите фото!' }]}
        >
          <Upload name='logo' beforeUpload={() => false} action='/upload.do' listType='picture'>
            <Button icon={<UploadOutlined />}>Загрузить фото</Button>
          </Upload>
        </Form.Item>

        <Title level={3} style={{ fontWeight: 500, fontSize: '18px', lineHeight: '24px' }}>
          Характеристики
        </Title>
        <Form.Item
          {...formItemLayout}
          name='square'
          label='Площадь'
          rules={[
            {
              required: true,
              message: 'Укажите площадь питчи!',
            },
          ]}
        >
          <Input className='location-square' style={{ width: '75%' }} placeholder='Введите площадь' />
        </Form.Item>
        <Form.Item>
          <div className='button-box'>
            <GoBack />
            <Button className='submit-btn' htmlType='submit' disabled={disable}>
              Создать питчу
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
    
  );
};

export default NewPitch;
