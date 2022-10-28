
import HomePage from './Pages/HomePage.jsx';
import Booking from './Pages/Booking.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<HomePage/>}/>

      <Route path='/booking' exact element={<Booking/>}/>

  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
