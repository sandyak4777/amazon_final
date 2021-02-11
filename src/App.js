import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import LoginPage from './Login/LoginPage';
import Cart from './CartPage/Cart';
// import {useStateValue} from './StateProvider';
// import { auth } from './firebase';

function App() {
  // const [{user}, dispatch] = useStateValue();

  // useEffect(() => {
  //   const unSubscribe = auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser
  //       })
  //     }
  //     else{
  //       dispatch({
  //         type: "SET_USER",
  //         user: null
  //       })
  //     }
  //   })
  //   return () => {
  //     unSubscribe();
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" ><Header/><Home/></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/checkout"><Header/><Cart/></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
