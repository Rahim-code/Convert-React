import React from 'react';
import Missionicon from '../img/icons/mission_icon.png';
import Purposeicon from "../img/icons/purpose_icon.png";
import Targeticon from "../img/icons/target_icon.png"

export default function Benefits() {
  return (
    <section>
    <div className="my-5 container">
      <div className="row justify-content-around">
        <div className="col-lg-4 col-md-4 col-sm-12" >
          <div className="border-0">
            <div  className="card-body p-0">
              <div className="py-2">
                <img className="bicon" src={Missionicon} alt="mission"/>
              </div>
              <h5 className="card-title montserrat Iconpl">Missiyamız</h5>
              <p  className="card-text _card-text w-75 textsm textpl">Müştərilərə daha keyfiyyətli xidmət <br/>
                 vermək, bizneslərə layihələrində dəyər
                qatmaq və ölkə iqtisadiyyatına dəstək olmaq.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="border-0">
            <div  className="card-body p-0">
              <div className="py-2">
                <img className="bicon" src={Purposeicon} alt="purpose"/>
              </div>
              <h5 className="card-title montserrat Iconpl">Məqsədimiz</h5>
              <p className="card-text _card-text textsm">Müştərilərə maksimal dərəcədə <br/> faydalı olmaq.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="border-0">
            <div  className="card-body p-0">
              <div className="py-2">
                <img className="bicon" src={Targeticon} alt="taget"/>
              </div>
              <h5 className="card-title montserrat Iconpl">Hədəfimiz</h5>
              <p className="card-text _card-text textsm">Qabaqcıl və daha güclü maliyyə <br/> qurumuna çevrilmək.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
