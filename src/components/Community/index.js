import React, { useEffect, useState } from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const Community = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://destinservice.properties.aldar.com/api/destination/nearby-destinations?lat=24.5403768&long=54.4354677&name=Saadiyat+Island';

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Data----" + JSON.stringify(result.data));
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="community">
      <Text tag="h1" className="comId" field={props.fields.comId} />
      <Text tag="h2" className="comTitle" field={props.fields.comTitle} /> 
      <RichText tag="div" className="comDescription" field={props.fields.comDescription} />
    </div>
  );
};

export default Community;
