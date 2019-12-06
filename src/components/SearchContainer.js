import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MyCard from "./MyCard";

class SearchContainer extends React.Component {

    renderList(){
        return this.props.list.map(elem => {
            return <MyCard />
        })
    }

    render() {
        return (
            <>
                <Row>
                    <Col xs={3}>1 of 2 (wider)</Col>
                    <Col>
                        <Row noGutters={true}>
                            <MyCard />
                            <MyCard />
                            <MyCard /><MyCard />
                            <MyCard /><MyCard />
                            <MyCard />




                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default SearchContainer;