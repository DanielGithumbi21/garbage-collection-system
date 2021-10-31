import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home/Home';
import GarbageSign from './components/GarbageCollector/Sign';
import CustomerSign from "./components/customer/Sign"
import SchedulePickUp from './components/customer/pickUp';
import CustomerBooking from './components/customer/Booking';
import BookingsMade from './components/GarbageCollector/BookingsMade';
import Dashboard from './components/Admin/dashboard';
import AcceptedOrders from './components/GarbageCollector/AcceptedOrders';
import AcceptedBookings from './components/customer/acceptedBookings';
import AdminSign from './components/Admin/Admin';
import CustomersData from './components/Admin/customers';
import VendorsData from './components/Admin/vendors';
import BookingsData from './components/Admin/bookings';
import CustomerPayment from './components/customer/Payment';
import PaymentsMade from "./components/GarbageCollector/paymentsMade"
import AcceptedPayments from './components/customer/acceptedPayments';
import Banner from './components/Home/banner';

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
        <Route path="/vendor/payments" component={PaymentsMade}/>
        <Route path="/customer/accepted-orders" component={AcceptedBookings}/>
        <Route path="/customer/payment" component={CustomerPayment}/>
        <Route path="/customer/accepted-payment" component={AcceptedPayments}/>
        <Route path="/admin" exact component={AdminSign}/>
        <Route path="/admin/dashboard" component={Dashboard}/>
        <Route path="/admin/customers" exact component={CustomersData}/>
        <Route path="/admin/vendors" component={VendorsData}/>
        <Route path="/admin/bookings" component={BookingsData}/>
        <Route path="/banner" component={Banner}/>
      </Router>
    </div>
  )
}

export default App;
