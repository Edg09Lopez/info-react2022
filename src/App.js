import './App.css';
import Noticia from './components/Noticia';
import Header from './components/Header';
import ClassComponent from './components/ClassComponent';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Noticia titulo="Primera Noticia" descripcion="Detalle de la primera noticia"></Noticia>
      <ClassComponent titulo="Class Component"></ClassComponent>
    </div>
  );
}

export default App;
