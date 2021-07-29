import React from "react";
import Data from "../src/data.json";
import CardProduct from "./component/card";
import ModalProduct from "../src/component/modal";
import { Row, Col } from "reactstrap";
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
                        <ModalProduct
                            isShow={isShow}
                            setShow={setShow}
                            product={product}
                        />
                    </div>
                </section>
            </Style>
        </div>
    );
};

export default App;
