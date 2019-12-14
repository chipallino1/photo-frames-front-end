import React from 'react';
import ControlledCarousel from "./ControlledCarousel";
import item1 from "../img/mail.png";
import item2 from "../img/google-logo.png";
import item3 from "../img/phone.jpg";

function Home() {
    return (
        <>
            <ControlledCarousel/>
            <div className="container marketing" style={{margin: 150}}>

                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src={item1}
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Mail</h2>
                        <p>All orders that you do notify us using email. We see all info about order and then our admins
                        confirm your order and you will get email message confirmation that we receive your order.</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src={item2}
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Google</h2>
                        <p>We use OAuth that helps you easier login our site and don't waste time to sign up. Also we have sign up feature.
                        If you want to make order you must log in.</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src={item3}
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Contacts</h2>
                        <p>You always can contact us.<br/>Email - skorupich00@mail.ru<br/>
                        Phone - +375 29 917 22 24</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;