import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';

// Fallback data if API fails
const DEFAULT_STATS = {
  consultingSuccess: 98,
  worldwideClients: 120
};

const About1Card = () => {
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/clients?limit=1&sort=-updatedAt');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response was not JSON');
        }

        const data = await response.json();
        
        if (data?.docs?.[0]) {
          setStats({
            consultingSuccess: data.docs[0].consultingSuccess || DEFAULT_STATS.consultingSuccess,
            worldwideClients: data.docs[0].worldwideClients || DEFAULT_STATS.worldwideClients
          });
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="loading-spinner">Loading statistics...</div>;
  if (error) return <div className="error-notice">Showing default statistics</div>;

  return (
    <ReactWOW animation='fadeInUp' delay="500ms">
      <div className="about-card">
        <ul>
          <li>
            <div className="icon">
              <i className="flaticon-license"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp 
                    enableScrollSpy 
                    end={stats.consultingSuccess} 
                    delay={0.5} 
                    duration={2.5} 
                  />
                </div>
                <div className="operator">%</div>
              </div>
              <span className="medium">Consulting Success</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="flaticon-global"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp 
                    enableScrollSpy 
                    end={stats.worldwideClients} 
                    delay={0.5} 
                    duration={2.5} 
                  />
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Worldwide Clients</span>
            </div>
          </li>
        </ul>
      </div>
    </ReactWOW>
  );
};

export default About1Card;