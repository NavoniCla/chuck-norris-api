import { useState } from 'react'
import './Styles/App.css'
import Title from './Components/Title.jsx'
import Button from './Components/Button.jsx'
import Dropdown from './Components/Dropdown.jsx'
import JokeText from './Components/JokeText.jsx'

function App() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [clicked, setClicked] = useState(false);
  let url = "https://api.chucknorris.io/jokes/categories";
  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{
    data.unshift("random");
    setCategories(data);
  }).catch((e)=>{
    console.log(e)
  })

  function generateJoke(){
    let selectedCategory = document.getElementById("dropdown").value
    let url = "https://api.chucknorris.io/jokes/" + (selectedCategory==="random"?"random":("random?category=") + selectedCategory);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
      setClicked(true);
    }).catch((e)=>{
      console.log(e)
    })
  }

  function copyJoke(){
    let jokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(jokeText.innerText);
  }

  return (
    <div className="App">
      <Title>Chuck Norris Joke Generator</Title>
 
            <Button id='generate' callback={generateJoke}>Generate Joke</Button>
            <Dropdown id='dropdown' values={categories}></Dropdown>

            <JokeText id='JokeText'>{joke}</JokeText>
         
        
          <Button id='clipboard' callback={copyJoke} variant={clicked === true ? undefined : "disabled"}>Copy to clipboard</Button>

    </div>
  )
}

export default App