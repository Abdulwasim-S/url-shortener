import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Routers/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpPage from './Routers/SignUpPage';
import ActivatePage from './Routers/ActivatePage';
import CheckMail from './Routers/CheckMail';

function App() {
  return (
    <div className="App">
      <Routes exact path = "/">
        <Route path = "/" element={<SignUpPage/>}/>
        <Route path='/activation' element={<ActivatePage/>}></Route>
        <Route path='/checkmail' element={<CheckMail/>}/>
      </Routes>
    </div>
  );
}

export default App;
