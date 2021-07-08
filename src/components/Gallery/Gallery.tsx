import React, {useState} from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";
import {Col, Modal, Row} from "antd";
import FormMain from "../Form/FormMain";

const Gallery = (props: any) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [postId, setId] = useState(0);
    const showModal = (id: any) => {
        setId(id)
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const galleryItem = props.gallery.map((data: any) =>
        <Col span={8}>
            <GalleryItem key={data.id}
                         id={data.id}
                         title={data.title}
                         text={data.text}
                         url={data.url}
                         showModal={showModal}
            />
        </Col>
    )
    const modal = props.gallery.map((data: any) => {
            if (postId === data.id) {
                return (
                    <Modal key={data.id} title={data.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Row justify='space-between'>
                            <Col span={10}>
                                <img style={{maxWidth: '100%'}} alt="example"
                                     src={data.url}/>
                            </Col>
                            <Col span={10}>
                                <p>{data.text}</p>
                            </Col>
                        </Row>
                    </Modal>
                )
            }
            else {
                return ''
            }
        }
    )

    return (
        <section className='Gallery'>
            <FormMain addGallery={props.addGallery}/>
            <h1 style={{textAlign:"center",fontSize:'25px'}}>Посты</h1>
            <Row>
                {galleryItem}
            </Row>
            {modal}
        </section>
    )
}

export default Gallery

