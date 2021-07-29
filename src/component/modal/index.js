import React from "react";
import Slider from "react-slick";
import { Modal, ModalBody, Button, ModalFooter, ModalHeader } from "reactstrap";
import styled from "styled-components";
import defaultImage from "../../asset/images.jpg";

const Style = styled.div`
    margin-bottom: 30px;
    .slick-prev {
        left: -9px;
    }
    .slick-next {
        right: -9px;
    }
    .slick-prev:before,
    .slick-next:before {
        color: black;
    }

    .productItem {
        width: 300px;
        margin: auto;
        margin-bottom: 10px;
        &-img {
            width: 100%;
            object-fit: contain;
            dipslay: block;
        }
    }
`;

const Order = styled.div`
    .button-order {
        padding: 0 12px;
        font-size: 12px;
    }
    .span {
        width: 20px;
        padding: 0 15px;
    }
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ModalProduct = ({ isShow = false, setShow = () => {}, product = {} }) => {
    const [total, setTotal] = React.useState(1);
    const totalOrder = (value) => {
        if (value === "plus") {
            setTotal(total + 1);
        } else {
            setTotal(total - 1);
        }
    };
    return (
        <Modal size="lg" isOpen={isShow} toggle={() => setShow(false)}>
            <ModalHeader toggle={() => setShow(false)}>
                {product.name}
            </ModalHeader>
            <ModalBody>
                <Style>
                    <Slider {...settings}>
                        {product?.product_image?.length > 0 &&
                            product?.product_image?.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <div className="productItem">
                                            <img
                                                src={
                                                    item.img_url.length === null
                                                        ? defaultImage
                                                        : item.img_url
                                                }
                                                className="productItem-img"
                                            />
                                        </div>
                                        <p style={{ textAlign: "center" }}>
                                            {product?.pre_order === true
                                                ? "pre order"
                                                : ""}
                                        </p>
                                    </div>
                                );
                            })}
                    </Slider>
                </Style>
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    ></div>

                    <div style={{ display: "flex" }}>
                        <p>Harga : </p>
                        <p style={{ marginLeft: 10 }}>{product.price}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p>Total :</p>
                        <p style={{ marginLeft: 10 }}>
                            Rp {total * product.price}
                        </p>
                    </div>
                </div>
                <Order>
                    <Button
                        color="primary"
                        className="button-order"
                        onClick={() => totalOrder("min")}
                    >
                        -
                    </Button>
                    <span className="span">{total}</span>
                    <Button
                        color="primary"
                        className="button-order"
                        onClick={() => totalOrder("plus")}
                    >
                        +
                    </Button>{" "}
                </Order>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => setShow(false)}>
                    Do Something
                </Button>{" "}
                <Button color="secondary" onClick={() => setShow(false)}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};
export default ModalProduct;
