import React from "react";
import Data from "../src/data.json";
import CardProduct from "./component/card";
import {
    Row,
    Col,
    Modal,
    ModalBody,
    Button,
    ModalFooter,
    ModalHeader,
} from "reactstrap";
import styled from "styled-components";
import "./App.css";

const Style = styled.div`
    width: 980px;
    margin: auto;
    .btn-product {
        background: transparent;
        border: unset;
    }
`;
const App = () => {
    const [product, setProduct] = React.useState({});
    const [isShow, setShow] = React.useState(false);

    const handleGetProduct = (item) => {
        console.log(item);
        setShow(true);
        setProduct(item);
    };
    // React.useEffect(() => {
    //     if (showData) {
    //         console.log("enter");
    //         console.log(thisData);
    //         setThisData(Data.content);
    //         setShowData(false);
    //     }
    // }, [showData]);
    return (
        <div className="App">
            <Style>
                <section>
                    <Row>
                        {Data.content.map((item, key) => {
                            return (
                                <Col xl="3" key={key}>
                                    <button
                                        className="btn-product"
                                        onClick={() => handleGetProduct(item)}
                                    >
                                        <CardProduct item={item} />
                                    </button>
                                </Col>
                            );
                        })}
                    </Row>
                    <div>
                        <Modal isOpen={isShow} toggle={() => setShow(false)}>
                            <ModalHeader toggle={() => setShow(false)}>
                                {product.name}
                            </ModalHeader>
                            <ModalBody dangerouslySetInnerHTML={{ __html: product.description }}>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    onClick={() => setShow(false)}
                                >
                                    Do Something
                                </Button>{" "}
                                <Button
                                    color="secondary"
                                    onClick={() => setShow(false)}
                                >
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </section>
            </Style>
        </div>
    );
};

export default App;
