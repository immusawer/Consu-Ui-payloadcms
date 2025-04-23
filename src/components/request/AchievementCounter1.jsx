import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

// Fallback data
const DEFAULT_ACHIEVEMENTS = {
  advices: 500,
  awards: 30
};

const AchievementCounter1 = () => {
  const [achievements, setAchievements] = useState(DEFAULT_ACHIEVEMENTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/achievements?limit=1&sort=-updatedAt');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response was not JSON');
        }

        const data = await response.json();
        
        if (data?.docs?.[0]) {
          setAchievements({
            advices: data.docs[0].businessAdvices || DEFAULT_ACHIEVEMENTS.advices,
            awards: data.docs[0].excellenceAwards || DEFAULT_ACHIEVEMENTS.awards
          });
        }
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) return <div className="loading-spinner">Loading achievements...</div>;
  if (error) return <div className="error-notice">Showing default achievement values</div>;

  return (
    <div className="achivement-counter">
      <ul>
        <li>
          <div className="icon">
            <i className="flaticon-handshake"></i>
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer">
                <CountUp 
                  enableScrollSpy 
                  end={achievements.advices} 
                  delay={0.5} 
                  duration={2.5} 
                />
              </div>
              <div className="operator">+</div>
            </div>
            <span className="medium">Business advices given over 30 years</span>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="flaticon-employee"></i>
          </div>
          <div className="fun-fact">
            <div className="counter">
              <div className="timer">
                <CountUp 
                  enableScrollSpy 
                  end={achievements.awards} 
                  delay={0.5} 
                  duration={2.5} 
                />
              </div>
              <div className="operator">+</div>
            </div>
            <span className="medium">Business Excellence awards achieved</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AchievementCounter1;