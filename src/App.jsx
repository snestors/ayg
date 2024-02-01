import Login from "./pages/auth/login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import { useEffect } from "react";
import { supabase } from "./lib/supabase";


function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        if(!session) {
          navigate('/Login')
        }else (
          navigate('/')
        )
      })

}, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
