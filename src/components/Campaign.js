import React from 'react';
import Hediyye from "../img/Hediyye.png";
import Flower from "../img/Flower.png";
import Gold from "../img/gold.png";

export default function Campaign() {
  return (
    <section className="container my-5 py-3">
   <div className="d-flex justify-content-between align-items-center my-3 w-100">
    <h2 className="_campaigns">Kampaniyalar</h2>
    
      <p style={{ paddingTop: 2 }} className="_all mx-2">Hamısı <i style={{ color: "#00A5B4 !important" }} className="fa-solid fa-arrow-right py-2"></i></p>
      
    
   </div>
   <div className="row justify-content-between w-100">
     <div className="col-lg-4 col-md-4 col-sm-12  c_card mb-5">
      <div className="card cimg box-shadow  p-0 mb-5 bg-body rounded border-0 ">
        <img src={Hediyye}className="card-img-top _pc " alt="..."/>
        <div className="card-body">
          <h6 className="card-text w-lg-50 dtext">Partnyorlarımızda Novruz bayramı kampaniyası</h6>
          <span className="_time text-muted">⏱ 28.03.2022</span>
        </div>
      </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-12  c_card mb-5">
      <div  className="card cimg box-shadow p-0 mb-5 bg-body rounded border-0 ">
        <img src={Flower}className="card-img-top _pc" alt="..."/>
        <div className="card-body">
          <h6 className="card-text w-lg-50 ctext">City finance-dan yaz
            sürprizləri</h6>
          <span className="_time text-muted">⏱ 25.04.2022</span>
        </div>
      </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-12  c_card mb-5">
      <div className="card cimg  box-shadow p-0 mb-5 bg-body rounded border-0 ">
        <img src={Gold} className="card-img-top _pc" alt="..."/>
        <div className="card-body">
          <h6 className="card-text w-lg-50 ctext">
            Lombard krediti üzrə Kampaniya
          </h6>
          <span className="_time text-muted">⏱ 12.05.2022</span>
        </div>
      </div>
     </div>
   </div>
</section>

  )
}
