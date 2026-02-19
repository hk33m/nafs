
import { Routes,Route } from "react-router-dom";

import Start from "./start";

function App() {
 

  return(
 
    <div>
     
      <Routes>
        <Route path="/" element={<Start></Start>} ></Route>
        <Route path="/*" element={<Start></Start>} ></Route>
      </Routes>
    </div>
 
  )
 
}

export default App;
