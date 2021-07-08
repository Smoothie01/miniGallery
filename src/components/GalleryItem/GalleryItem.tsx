import React from 'react';
import {Card} from "antd";
import style from './GalleryItem.module.css'
import { Meta } from 'antd/lib/list/Item';

const GalleryItem = (props:any) => {
    let showModal = ()=>{
        props.showModal(props.id)
    }

    return (
            <Card
                className={style.card}
                hoverable
                onClick={showModal}
                cover={<img src={props.url}/>}
            >
                <Meta title={props.title} description={props.text}/>
            </Card>
    )
}

export default GalleryItem

