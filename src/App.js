import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Routers/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpPage from './Routers/SignUpPage';
import ActivatePage from './Routers/ActivatePage';
import CheckMail from './Routers/CheckMail';
import Forgetpassword from './Routers/ForgetPasswordPage';
import ResetPage from './Routers/ResetPage';
import { createContext, useState } from 'react';
import URLCreatePage from './Routers/URLCreatePage';
import URLPage from './Routers/URLPage';


export const AppContext = createContext(null);

function App() {
  const[urlList,setUrlList]=useState([]);
  return (
    <div className="App">
      <AppContext.Provider value={{urlList,setUrlList}}>
        <Routes exact path = "/">
          <Route path='/' element={<LoginPage/>}/>
          <Route path = "/signup" element={<SignUpPage/>}/>
          <Route path = "/login" element={<LoginPage/>}/>
          <Route path='/activation' element={<ActivatePage/>}></Route>
          <Route path='/checkmail' element={<CheckMail/>}/>
          <Route path='/forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/resetpassword' element={<ResetPage/>}/>
          <Route path='/urlpage' element={<URLCreatePage/>}>
            {urlList.length !==0 && <Route path='' element={<URLPage/>}/>}
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
