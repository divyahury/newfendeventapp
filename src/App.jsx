import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import EventDetail from './pages/EventDetail';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateEvent from "./pages/CreateEvent";
import Account  from "./pages/Account";
import FindEvents from "./pages/FindEvents"
import Dashboard from  "./pages/host/Dashboard";
import Buy  from "./pages/Buy";
import Orders from "./pages/host/Orders";
import Myevents from './pages/host/Myevents';
import Financial from "./pages/host/Financial";
import HostProfile  from "./pages/host/HostProfile";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventdetail" element={<EventDetail />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/searchevents" element={ <FindEvents />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/host/dashboard" element={<Dashboard />} />
        <Route path="/host/orders" element={<Orders />} />
        <Route path="/host/myevents" element={<Myevents />}/>
        <Route path="/host/financials" element={<Financial />}/>
        <Route path="/host/profile" element={<HostProfile />}/>
      </Routes>
    </Router>
  );
}

export default App;

 
