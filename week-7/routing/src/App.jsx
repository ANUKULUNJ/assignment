import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React,{Suspense} from "react";
import "./App.css";
const Dashboard = React.lazy(()=> import("./components/dahboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  //suspense api
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback ={"loading..."}><Dashboard/></Suspense>} />
          <Route path="/" element={<Suspense fallback ={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar(){
   const navigate = useNavigate();

   return ( <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing page
        </button>

        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
      )
    
}
 export default App;