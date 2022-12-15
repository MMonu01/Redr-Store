import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
// import TopCarousel from './Components/HomeComponents/TopCarousel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Login/> */}
   <AllRoutes/>
    </div>
  );
}

export default App;
