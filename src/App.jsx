import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';

function App() {

  const [data, setData] = useState([]);
  const [number, setnumber] = useState(1);

  const fetchData = async() => {
    try {
      const datainapi = await fetch('https://jsonplaceholder.typicode.com/posts');
      return datainapi.json();
    } catch (error) {
      console.log(error);
    }
  }

  //runs only one time
  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
    }).catch((err) => {
      console.log(err);
    })
  },[number])

  console.log(data);
  

  return (
    <div className="App">
      <Header />
      {number}
      <button onClick={()=> setnumber(number + 1)}>Click to reload api</button>
    </div>
  );
}

export default App;
