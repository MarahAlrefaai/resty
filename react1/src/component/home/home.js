import React, { useState }  from 'react';

import Form from '../form/form.js';
import Result from '../result/result.js';
import axios from 'axios';
  export default function App (props) {
 
    const [data, setData] = useState(null);
    const [requestParams, setRequest] = useState({});
    const handleApiCall = async (requestParams) => {
      setRequest(requestParams);
      let methodCall = requestParams.method.toLowerCase();
      const response = await axios[methodCall](requestParams.url, (requestParams.body) ? (requestParams.body) : null);
      const result = {
        
        results: response.data
      };
     
      setData(result);
    }
    return (
      <>
        <Form handleApiCall={handleApiCall} />
     <Result  data={data} 
        url={requestParams.url} method={requestParams.method}/>
      </>
    );
  }
