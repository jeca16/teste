import './App.css';
import Evento from './components/Evento';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Form from './components/Form';

function App() {
  const nome = 'maria '
  return (
    <div className="App">
      <h1>teste</h1>
      <Evento frase = 'to the stars who listen and the dreams that are answered'/>
      <Form/>
      

      <Frase/>
      <Frase/>
      <SayMyName nome='matheus'/>
      <SayMyName nome='joão'/>
      <SayMyName nome = {nome}/>
      <Pessoa 
      nome="jess" 
      idade = "17" 
      profissao = "programadora" 
      foto = "https://miro.medium.com/v2/resize:fit:1024/1*Hzes1SQwIwrxNr46jsBBlA.png"
      />
      <List/>
    </div>
  );
}

export default App;