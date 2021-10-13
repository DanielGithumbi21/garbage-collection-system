import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home/Home';
import GarbageSign from './components/GarbageCollector/Sign';
import CustomerSign from "./components/customer/Sign"
import SchedulePickUp from './components/customer/pickUp';
import CustomerBooking from './components/customer/Booking';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component = {Home}/>
        <Route path="/garbage/sign" exact component = {GarbageSign}/>
        <Route path="/customer/sign"  component = {CustomerSign}/>
        <Route path="/customer/pickup"  component = {SchedulePickUp}/>
        <Route path="/customer/booking" component={CustomerBooking}/>
      </Router>
    </div>
  )
}

export default App;
