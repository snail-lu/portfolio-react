import { useRoutes } from "react-router-dom";
import './App.css';
import routeConfig from './router/index'

function App() {
  let element = useRoutes(routeConfig);
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
