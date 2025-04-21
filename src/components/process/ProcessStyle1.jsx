import React, { useEffect, useState } from 'react';
import shape11 from '/assets/img/shape/11.png';
import SingleProcess1 from './SingleProcess1';

const ProcessStyle1 = ({ sectionClass }) => {
  const [processData, setProcessData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProcessData = async () => {
      try {
        // First try the Payload CMS API endpoint
        let response = await fetch('http://localhost:3000/api/process?limit=100&depth=2');
        
        // If that fails, fall back to local JSON
        if (!response.ok) {
          console.warn('Payload API not available, falling back to local JSON');
          setProcessData(Process1Data); // Import your local JSON
          setLoading(false);
          return;
        }

        const data = await response.json();
        
        if (data.docs) {
          const sortedData = [...data.docs].sort((a, b) => (a.order || 0) - (b.order || 0));
          setProcessData(sortedData);
        } else {
          // If no docs, use local JSON
          setProcessData(Process1Data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching process data:', error);
        setError(error.message);
        setLoading(false);
        // Fall back to local JSON
        setProcessData(Process1Data);
      }
    };

    fetchProcessData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">Error: {error} (using local data as fallback)</div>;

  return (
    <div className={`process-style-one-area text-center default-padding ${sectionClass || ''}`}>
      {/* ... rest of your JSX ... */}
      <div className="container">
        <div className="row">
          {processData.map((process) => (
            <div className="col-lg-4" key={process.id}>
              <SingleProcess1 
                process={{
                  ...process,
                  // Handle both Payload CMS and local JSON formats
                  thumb: process.image?.url || `/assets/img/about/${process.thumb}`
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessStyle1;