import './App.css';
import HelloWord from './components/HelloWord'

function App() {

  const name = 'jessica'
  const newname = name.toUpperCase()

  function sum (a, b){
    return a +b
  }


  const url = "https://m.media-amazon.com/images/I/81COEUtQKCL._SL1500_.jpg"
  return (
    <div className="App">
      <h1> teste</h1> 
      <p>ola, {newname}</p>
      <p> soma: {sum(1,2)}</p>
      <img src= {url} alt="minha imagem"></img>
      <HelloWord/>
    </div>
  );
}

export default App;
