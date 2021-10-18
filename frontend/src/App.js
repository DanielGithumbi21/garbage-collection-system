import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home/Home';
import GarbageSign from './components/GarbageCollector/Sign';
import CustomerSign from "./components/customer/Sign"
import SchedulePickUp from './components/customer/pickUp';
import CustomerBooking from './components/customer/Booking';
import BookingsMade from './components/GarbageCollector/BookingsMade';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/dashboard';
import AcceptedOrders from './components/GarbageCollector/AcceptedOrders';
import AcceptedBookings from './components/customer/acceptedBookings';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component = {Home}/>
        <Route path="/garbage/sign" exact component = {GarbageSign}/>
        <Route path="/customer/sign"  component = {CustomerSign}/>
        <Route path="/customer/pickup"  component = {SchedulePickUp}/>
        <Route path="/customer/booking" component={CustomerBooking}/>
        <Route path="/vendor/booking" component={BookingsMade}/>
        <Route path="/vendor/accepted-orders" component={AcceptedOrders}/>
        <Route path="/customer/accepted-orders" component={AcceptedBookings}/>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/admin/dashboard" component={Dashboard}/>
      </Router>
    </div>
  )
}

export default App;
