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
        <p className="grey mb-5 pb-5">Ünvan: Demirchi Tower,
          17-ci mərtəbə</p>
          <p className="grey mt-5 pt-5">© 2022 All Rights Reserved</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <h5 className="text-light my-3">Şirkət</h5>
        <p className="grey">Partnyorlarımız</p>
        <p className="grey">Vakansiyalar</p>
        <p className="grey">Hesabatlar</p>
        <p className="grey">Kampaniyalar</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <h5 className="text-light my-3">Xidmətlər</h5>
          <p className="grey">Mikrokredit</p>
        <p className="grey">Lombard krediti</p>
        <p className="grey">İstehlak krediti</p>
        <p className="grey">Faktorinq krediti</p>
        <p className="grey">Lizinq krediti</p>
        <p className="grey">Avtokredit</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 py-5">
        <h5 className="text-light my-3">Əlaqə</h5>
          <p className="grey">Tel: <br/> +99412 310 57 00</p>
          <p className="grey">E-mail:<br/> info@cityfinance.az</p>
          <img className='wimg' src={Facebook} alt=""/>
            <img className="mx-2 wimg" src={Twit}alt=""/>
            <img className='wimg' src={Instagram} alt=""/>
          </div>
          
    </div>
  </div>
</footer>
  )
}
