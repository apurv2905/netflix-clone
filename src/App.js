import React, {useEffect} from 'react';
import './App.css';
import Homescreen from "./Components/Homescreen/Homescreen";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginScreen from "./Components/LoginScreen/LoginScreen";

import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./Firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";
import GreetingsScreen from "./Components/GreetingsScreen/GreetingsScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    useEffect(() => {
        return onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
          {!user ? (
              <LoginScreen />
          ) : (
              <Switch>
                  {/*<Route path="/" element={<Homescreen />} />*/}
                  <Route path="/profile">
                      <ProfileScreen />
                  </Route>
                  <Route path="/greetings">
                      <GreetingsScreen />
                  </Route>
                  <Route exact path="/">
                      <Homescreen />
                  </Route>
              </Switch>
          )}
      </BrowserRouter>
    </div>
  );
}

export default App;
