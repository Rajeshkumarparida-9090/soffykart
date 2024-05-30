import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CustomRouter from './Ruoter/CustomRouter';
import Footer from './component/Footer';
import { Box } from '@mui/material';
import "./css/footer.css";
import "./css/custom.css"
import Login from "./component/auth/Login";
import CustomReactPlayer from './reuseComponent/CustomReactPlayer';



// import Header from './component/Header';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation()
  // console.log("location", location)
  // useEffect(()=>{
  //   localStorage.setItem("isProfile", false)
  // },[])
  return (

     
      <>
        {/* <Router>
          <Routes>
            <Route path='/' element={isLoggedIn ? <CustomRouter /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes> */}
          {/* {isLoggedIn ? <CustomRouter /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          {isLoggedIn? 
        <Box className="fixed-footer">
        <Footer />
      </Box>:""  
        }
           */}
        {/* </Router> */}

        <CustomRouter />
      </>
     
      
  
  );
}

export default App;
