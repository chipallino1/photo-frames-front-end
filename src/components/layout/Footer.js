import React from 'react';
import './Footer.css';
import Button from "react-bootstrap/Button";

function Footer() {
    return (
        <>
            <footer className="footer">
                <h5>Рамки-опт.бел 2020</h5>
                <Button variant="info" style={{marginBottom: '2%'}}>
                    <a href="#" style={{color: 'white'}}>Наверх</a>
                </Button>
            </footer>
        </>
    );
}

export default Footer;