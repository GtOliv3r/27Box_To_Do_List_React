import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import 'react-toastify/dist/ReactToastify.css';

// Componente funcional App
function App() {
  // Renderiza o componente TodoWrapper que contém a lógica da aplicação
  return (
    <div className="App">
      <TodoWrapper></TodoWrapper>
    </div>
  );
}

// Exporta o componente App como componente padrão do arquivo
export default App;
