import React from 'react';
import ControlledCarousel from "./ControlledCarousel";
import item1 from "../img/schedule-24px.svg";
import item2 from "../img/settings_phone-24px.svg";
import item3 from "../img/sync_alt-24px.svg";
import Image from "react-bootstrap/Image";
import Divider from "@material-ui/core/Divider";
import ButtonsGroup from "./layout/ButtonsGroup";

function Home() {
    return (
        <>
            <ControlledCarousel/>
            <div className="container marketing">

                <div className="container-fluid">
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4">
                                <Image src={item1} fluid="true" width="200" height="200" roundedCircle/>
                            </div>
                            <div className="col-lg-8" style={{margin: "auto"}}>
                                <h2>Mail</h2>
                                <p>All orders that you do notify us using email. We see all info about order and then
                                    our
                                    admins
                                    confirm your order and you will get email message confirmation that we receive your
                                    order.</p>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4">
                                <Image src={item2} fluid="true" width="200" height="200" roundedCircle/>
                            </div>
                            <div className="col-lg-8" style={{margin: "auto"}}>
                                <h2>Mail</h2>
                                <p>All orders that you do notify us using email. We see all info about order and then
                                    our
                                    admins
                                    confirm your order and you will get email message confirmation that we receive your
                                    order.</p>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <div className="container marketing">
                        <div className="row">
                            <div className="col-lg-4">
                                <Image src={item3} fluid="true" width="200" height="200" roundedCircle/>
                            </div>
                            <div className="col-lg-8" style={{margin: "auto"}}>
                                <h2>Mail</h2>
                                <p>All orders that you do notify us using email. We see all info about order and then
                                    our
                                    admins
                                    confirm your order and you will get email message confirmation that we receive your
                                    order.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonsGroup/>

        </>
    );
}

export default Home;