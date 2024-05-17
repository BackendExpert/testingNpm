import NoAxios from 'no-axios'
import { useState } from 'react';
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0)

  // URL of the endpoint
  const url = 'http://localhost:8081/NewData';

  // Data to be sent in the POST request
  const data = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  };

  // const hi = NoAxios.SendToBackEnd(url, data)
  axios.post(url, data)
  // console.log("hiiiiiii")
  .then(response => {
    // Handle success
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Errorss:', error);
  });

  return (
    <div className=""></div>
  )
}

export default App
