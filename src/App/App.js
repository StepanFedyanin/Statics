import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppRouter from "../Component/Utils/AppRouter";
import '../Style/StyleReset.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
