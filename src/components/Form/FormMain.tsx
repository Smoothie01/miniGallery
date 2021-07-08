import {Form, Input, Button, Row, Col, Card} from 'antd';
import React,{useState} from "react";

const FormMain = (props:any) =>{
    const [form] = Form.useForm();
    const [loading,setLoading] = useState(false)
    const onCreate = (values: any) => {
        setLoading(true)
        console.log('Success:', values);
        setTimeout(()=>{
            props.addGallery(values)
            debugger
            form.resetFields();
            setLoading(false)
        },1000)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Row justify='center'>
            <Col span={10}>
                <h1 style={{textAlign:"center",fontSize:'25px'}}>Создать посты</h1>
                <Card style={{margin:'20px 0'}}>
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 17 }}
                        initialValues={{ remember: true }}
                        onFinish={onCreate}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Заголовок"
                            name="title"
                            rules={[{ required: true, message: 'Пожалуйста напишите заголовок' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Про что этот пост"
                            name="text"
                            rules={[{ required: true, message: 'Пожалуйста напишите текст' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Создать
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default FormMain
