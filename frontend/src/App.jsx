
import './App.css';
import { Routes ,Route } from 'react-router-dom' ;
import { Signup } from './components/Signup';
import { Dashboard } from './components/Dashboard';
import { SendMoney } from './components/SendMoney';
import { Signin } from './components/Signin';


function App() {

  return (
    <>
      <Routes>
        <Route  path = "/"  element = {<Dashboard />  } /> 
        <Route  path = "/signup"  element = {<Signup />  } /> 
        <Route  path = "/signin"  element = {<Signin />  } /> 
        <Route  path = "/sendmoney"  element = {<SendMoney />  } /> 
      </Routes>
    </>
  )
}

export default App
