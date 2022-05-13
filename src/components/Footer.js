import React from 'react';
import Footers from "../img/footere.png";
import Facebook from "../img/icons/facebook.png";
import Twit from "../img/icons/twit.png";
import Instagram from "../img/icons/insta.png";

export default function Footer() {
  
  return (
    <footer className="bg-dark">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <img className="my-3 imglogo" src={Footers} alt=""/>
        <p className="grey mb-5 pb-5 textsm">Ünvan: Demirchi Tower,
          17-ci mərtəbə</p>
          <p className="grey mt-5 pt-5 textsm">© 2022 All Rights Reserved</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <h5 className="text-light my-3 textsm">Şirkət</h5>
        <p className="grey textsm">Partnyorlarımız</p>
        <p className="grey textsm">Vakansiyalar</p>
        <p className="grey textsm">Hesabatlar</p>
        <p className="grey textsm">Kampaniyalar</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <h5 className="text-light my-3 textsm">Xidmətlər</h5>
          <p className="grey textsm">Mikrokredit</p>
        <p className="grey textsm">Lombard krediti</p>
        <p className="grey textsm">İstehlak krediti</p>
        <p className="grey textsm">Faktorinq krediti</p>
        <p className="grey textsm">Lizinq krediti</p>
        <p className="grey textsm">Avtokredit</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <h5 className="text-light my-3 textsm">Əlaqə</h5>
          <p className="grey textsm">Tel: <br/> +99412 310 57 00</p>
          <p className="grey textsm">E-mail:<br/> info@cityfinance.az</p>
          <div className="center">
            <img  src={Facebook}alt=""/>
            <img className="mx-3" src={Twit} alt=""/>
            <img src={Instagram} alt=""/>
    </div>
  </div>
          
    </div>
  </div>
</footer>
  )
}
