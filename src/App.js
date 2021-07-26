import React from "react";
import Data from "../src/data.json";
import CardProduct from "./component/card";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import "./App.css";

const Style = styled.div`
    width: 980px;
    margin: auto;
    Col {
        max-height: 300px;
    }
`;
const App = () => {
    console.log(Data);
    const [showData, setShowData] = React.useState(true);
    const [thisData, setThisData] = React.useState([]);
    React.useEffect(() => {
        if (showData) {
            console.log("enter");
            console.log(thisData);
            setThisData(Data.content);
            setShowData(false);
        }
    }, [showData]);
    return (
        <div className="App">
            <Style>
                <section>
                    <Row>
                        {Data.content.map((item, key) => {
                            return (
                                <Col xl="3" key={key}>
                                    <div>
                                        <CardProduct item={item} />
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </section>
            </Style>
        </div>
    );
};

export default App;
