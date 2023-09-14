import React, { useState, useEffect } from 'react';
import {fetchData} from './fetchData';

type Data = {
  id:number;
  name:string;
}

function ExternalDataComponent() {
  const [data, setData] = useState<Data[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
      fetchData().then(res => {
        setData(res);
        setLoading(false);

    }).catch(error => {      
      setLoading(true);
    })
    // }, 500);

  }, []);


  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data ?
      (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )
      :
      ''
    }
    </div>
  );
}

export default ExternalDataComponent;
