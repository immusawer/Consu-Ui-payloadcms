import React, { useEffect, useState } from 'react';
import logo1 from '/assets/img/logo/1.png';
import logo2 from '/assets/img/logo/2.png';
import logo4 from '/assets/img/logo/4.png';
import logo5 from '/assets/img/logo/5.png';
import logo6 from '/assets/img/logo/6.png';
import logo7 from '/assets/img/logo/7.png';

const PartnerStyle1 = ({ sectionClass }) => {
  const [partnerCount, setPartnerCount] = useState(80);
  const [loading, setLoading] = useState(false); // Set to false since we have fallback

  useEffect(() => {
    const fetchPartnerCount = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/partner-stats?limit=1');
        
        if (response.ok) {
          const data = await response.json();
          if (data?.docs?.[0]?.partnerCount) {
            setPartnerCount(data.docs[0].partnerCount);
          }
        }
      } catch (error) {
        console.log('Using default partner count');
      }
    };

    fetchPartnerCount();
  }, []);

  return (
    <div className={`partner-style-one-area ${sectionClass || ''}`}>
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="partner-map" style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}>
              <h2 className="mask-text" style={{ backgroundImage: `url(/assets/img/banner/10.jpg)` }}>
                {partnerCount}
              </h2>
              <h4>Partners worldwide</h4>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="partner-items">
              <ul>
                <li><img src={logo1} alt="Partner" /></li>
                <li><img src={logo2} alt="Partner" /></li>
                <li><img src={logo7} alt="Partner" /></li>
                <li><img src={logo4} alt="Partner" /></li>
                <li><img src={logo5} alt="Partner" /></li>
                <li><img src={logo6} alt="Partner" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerStyle1;