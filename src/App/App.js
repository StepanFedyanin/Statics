import { useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContextInput from "../Context/ContextInput";
import AppRouter from "../Component/Utils/AppRouter";
import '../Style/StyleReset.scss'
function App() {
  const [entranceContext, setEntranceContext] = useState({'booleanInput':false})
  return (
    <div className="App">
      <ContextInput.Provider value={{
				entranceContext,
				setEntranceContext: setEntranceContext
			}}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ContextInput.Provider>
    </div>
  );
}

export default App;
