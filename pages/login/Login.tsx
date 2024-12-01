import React, {useState} from "react";
import { Button, Form, Input, message, Radio } from 'antd';
import styles from './Login.module.css';
type LayoutType = Parameters<typeof Form>[0]['layout'];
type LoginProps = {
  handleSuccess: (isLogined:boolean) => void
}
const Login = (props: LoginProps) =>{
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };
  
  const handleFinish = (value:any) => {
      console.log(value.userName); console.log(value.password);
      // fetch('http://192.168.80.122:5013/api/Authenticate', {
      //   method:'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   },
      //   body: JSON.stringify({email: value.userName,
      //     password: value.password,
      //     role: "1"
      //   })
      // }).then(response=>response.json())
      // .then(data=>{
      //   if(data == 'Invalid credentials'){
      //     message.info('Incorrect user name or password');
      //   }
      //   else{
      //     localStorage.setItem('token', data.token)
      //     props.handleSuccess(true);
      //   }
      // }).catch(error=>console.log(error));
      if(value.userName=='admin'&&value.password=='admin'){
        props.handleSuccess(true);
      }
  }
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <img src='./images/Logo.png' className={styles.imageLogo} />
                </div>
            <Form className={styles.login}
      layout={formLayout}
      form={form} onFinish={handleFinish}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item name="layout">
      </Form.Item>
      <Form.Item name="userName" label="Tên đăng nhập (*)">
        <Input placeholder="input placeholder"
          onChange={(e)=>setUserName(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item name="password" label="Mật khẩu (*)">
        <Input placeholder="input placeholder" type="password"
        onChange={(e)=>setPassword(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit">Đăng nhập</Button>
      </Form.Item>
    </Form>
            </div>
            <div className={styles.right}>
                <img src="./images/introduction.png" />
                <div className={styles.text}>
                <p className={styles.normal}>Hệ thống</p>
                <p className={styles.highlight}>Quản lý xếp hàng</p>
                </div>
            </div>
        </div>
    )
}
export default Login;