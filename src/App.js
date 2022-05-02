import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes } from "react-router-dom";
import Category from "./pages/Category";
import Register from './pages/Register';
import Cart from './pages/Cart';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
    
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="app">
         <header className="App-header">
      
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
 </header>
        <Switch>
          <Route 
          exact 
          path="/" 
          render={(props) => (
            <Home {...props} />
          )} 
          />
          {/* <Route path="/login" component={Login} /> */}


          <Route path='/login' component={Login} />
          <Route path="/about" component={About} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;