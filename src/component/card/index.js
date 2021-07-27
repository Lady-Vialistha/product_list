import React, { useState } from "react";
import Data from "../../data.json";
import Image from "../../asset/images.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const Style = styled.div`
    padding: 15px;
    .product {
        &-name {
            margin-bottom: 4px;
            font-size: 0.86rem;
            color: rgba(49, 53, 59, 0.96);
            max-width: 100%;
            max-height: 100%;
            text-overflow: ellipsis;
            word-break: break-all;
            overflow: hidden;
            white-space: pre-wrap;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        &-desc {
            margin-bottom: 4px;
            font-size: 0.66rem;
            color: rgba(49, 53, 59, 0.96);
            max-width: 100%;
            max-height: 100%;
            text-overflow: ellipsis;
            word-break: break-all;
            overflow: hidden;
            white-space: pre-wrap;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        &-image {
            width: 100%;
            display: block;
            height: 181px;
            object-fit: contain;
        }
    }
`;

const CardProduct = ({ item }) => {
    return (
        <Style>
        
            <Card>
                <CardImg
                    className="product-image"
                    top
                    width="100%"
                    src={item?.product_image?.length === 0 ? Image: item?.product_image[0]?.img_url}
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle tag="h5" className="product-name">
                        {item.name}
                    </CardTitle>
                    <CardText>{item.price}</CardText>
                    <div
                        className="product-desc"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                </CardBody>
            </Card>
        </Style>
    );
};

export default CardProduct;
