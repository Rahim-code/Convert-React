import React, {useEffect} from 'react'


export default function CreditCal() {
  useEffect(()=>{
    
    window.onload = function() {
      var styledRanges = document.getElementsByClassName('styled_range');
      for (var i=0; i<styledRanges.length; i++) {
        var thumbRange = null, trackRange = null;
        for (var j=0; j<styledRanges[i].children.length; j++) {
          var child = styledRanges[i].children[j];
          if (child.className === 'thumb_range')
            var thumbRange = child;
          else if (child.className === 'track_range')
            var trackRange = child;
        }
        thumbRange.oninput = function(thumbRange, trackRange) {
          return function(e) {
            trackRange.value = thumbRange.value;
          };
        }(thumbRange, trackRange);
      }
    }
    }, [])
    return (
      <section className="calc-bg">
      <div className="container py-5">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-sm-12 col-md-6 prpl">
            <div className="px-5 py-5 ccmb" style={{ backgroundColor: "#FFFFFF" }}>
            <h6 className="_txt">Məbləğ</h6>
            <p className="amount">14.500.000 ₼</p>
          
            <form className="">
              <div className="styled_range">
                <input type="range" className="track_range"/>
                <input type="range" className="thumb_range"/>
              </div>
              <br/>
            
              </form>
            <div className=" d-flex justify-content-between">
              <p style={{ marginTop: "-10px" }} className="mil">1.000.000 ₼</p>
              <p  style={{ marginTop: "-10px" }}className="mil">20.000.000 ₼</p>
            </div>
            <h6 className="_txt mt-2">Müddət (il)</h6>
            <p className="amount">1 il</p>
         
            <form className="">
              <div className="styled_range">
                <input type="range" className="track_range"/>
                <input type="range" className="thumb_range"/>
              </div>
              <br/>
             
              </form>
            <div className=" d-flex justify-content-between">
              <p style={{ marginTop: "-10px" }} className="mil">1 il</p>
              <p  style={{ marginTop: "-10px" }}className="mil">3 il</p>
          </div>
          <div className=" d-flex justify-content-between">
            <p style={{ marginTop: "-10px" }} className="mil">Aylıq ödəniş</p>
            <p  style={{ marginTop: "-10px" }}className="azn"><b>200</b> ₼</p>
          </div>
        </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="py-5 px-5 ">
              <div className="row justify-content-between ">
                <div className="col-md-6 mt-4">
                  <input type="text" className="form-control" placeholder="Ad" aria-label="Ad"/>
                </div>
                <div className="col-md-6  mt-4">
                  <input type="text" className="form-control" placeholder="Soyad" aria-label="Soyad"/>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-md-6  mt-4">
                  <input type="text" className="form-control" placeholder="Aylıq əməkhaqqı" aria-label="Aylıq əməkhaqqı"/>
                </div>
                <div className="col-md-6  mt-4">
                  <input type="text" className="form-control" placeholder="İş yeri" aria-label="İ yeri"/>
                </div>
      
              </div>
              <div className="row justify-content-between">
                <div className="col-md-3">
                  <label htmlFor="inputState" className="form-label"></label>
                  <select  id="inputState" className="form-select">
                    <option value="default" disabled className="text-muted">Prefiks</option>
                    <option value="1">Prefiks</option>
                  </select>
                </div>
                <div className="col-md-8">
                  <label htmlFor="inputZip" className="form-label"></label>
                  <input type="text" className="form-control" id="inputZip" placeholder="Mobil nömrə"/>
                </div>
              </div>
              <div  className="row mt-4">
                <div className="col-md-8">
                  <p  className="_txt m-0 p-0">Biz müştərilərimizə asanlıqla əldə edə biləcəyiniz
                    sərfəli kredit təklif edirik.</p>
                </div>
                <div className="col-md-4  p-0 ">
                  <button type="button" className="btn _btn text-nowrap  btt">Sifariş et</button>
                </div>
              </div>
            </div>
           
        </div>
      </div>
      </div>
    </section>
  )
}
