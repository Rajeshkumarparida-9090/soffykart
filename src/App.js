import logo from './logo.svg';
import './App.css';
import CustomRouter from './Ruoter/CustomRouter';
import Footer from './component/Footer';
import { Box } from '@mui/material';
import "./css/footer.css";
import "./css/custom.css"
import CustomReactPlayer from './reuseComponent/CustomReactPlayer';
// import Header from './component/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <CustomReactPlayer /> */}
      <CustomRouter />
      <Box className="fixed-footer">
        <Footer />
      </Box>
      
    </>
  );
}

export default App;
