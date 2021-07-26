import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import image from "../../asset/images.jpg";
import styled from "styled-components";

const Style = styled.div`
    padding: 15px;
    Card {
        width: 700px;
        padding: 15px;
    }
`;

const CardProduct = ({ item }) => {
    return (
        <Style>
            <Card>
                <CardImg
                    top
                    width="100%"
                    src={item?.product_image[0]?.img_url}
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardText>{item.price}</CardText>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </Style>
    );
};

export default CardProduct;
