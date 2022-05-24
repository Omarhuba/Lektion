import "./App.css";
import { useState } from "react";
import imgFile from "./img/cat-1.jpg";
import axios from "axios";

function App() {
  const [img, setImg] = useState(imgFile)
  const [online, setOnline] = useState('OnLine')

  const changeImg = async () => {
    try {
      axios.defaults.headers.common["x-api-key"] =
      "8927152d-902b-4cad-a1b9-1fbf3c609c44";

      let response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        { params: { limit: 1, size: "full" } }
      );
       setImg(response.data[0].url);
        console.log(response.data[0].url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>You are : {online}</h1>
      <img src={img} alt="katt"  style={{width: '600px'}} />
      <br />
      <button onClick={changeImg} style={{width: '150px', height:'40px', margin: '1rem'}}>Click to Change Img</button>
    </div>
  );
}

export default App;
