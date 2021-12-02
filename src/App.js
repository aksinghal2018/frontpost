import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Addpost from "./Components/Addpost";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Register from "./Components/Register";
import User from "./Components/User";

function App() {
  return (
    <Router>
      <div>
       <Navbar />
        <Switch>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/posts/">
            <Post />
          </Route>
          <Route path="/addpost/">
            <Addpost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
