import React from 'react';
import { Form, Select, Button } from 'antd';
import './NewQueueForm.css';

const { Option } = Select;

const NewQueueForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Selected Service:', values.service);
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  return (
    <div className="new-queue-form-container">
      <h2 className="new-queue-form-title">CẤP SỐ MỚI</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="new-queue-form"
      >
        <Form.Item
          name="service"
          label="Dịch vụ khách hàng lựa chọn"
          rules={[{ required: true, message: 'Vui lòng chọn dịch vụ' }]}
        >
          <Select placeholder="Chọn dịch vụ">
            <Option value="service1">Khám tim mạch</Option>
            <Option value="service2">Khám sản - Phụ khoa</Option>
            <Option value="service3">Khám răng hàm mặt</Option>
            <Option value="service4">Khám tai mũi họng</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <div className="form-actions">
            <Button htmlType="button" onClick={handleCancel}>
              Hủy bỏ
            </Button>
            <Button type="primary" htmlType="submit">
              In số
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewQueueForm;
