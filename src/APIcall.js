import React,{ useState, useEffect} from 'react'
import axios from 'axios'

const baseURL = "https://8a4e2b287069-9560137974317168920.ngrok-free.app/api/sample";


const APIcall = () => {

  const [hypervisorData, setHypervisorData] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = "any value";
    axios.get(baseURL).then((response) => {
      setHypervisorData(response.data);
    });
  }, []);

  if (!hypervisorData) return null;

  console.log(hypervisorData);

  return (
    <>
    <div>APIcall</div>
    <p>{hypervisorData}</p>
    </>
    
  )
}

export default APIcall