import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer position='top-right' /> 
    </div>
  );
}

export default App;
