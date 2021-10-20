import React, {useState,useEffect} from 'react';
import AdminNavbar from '../Navbar/adminNavbar/Navbar';
import {Bar,Pie} from "react-chartjs-2"
import CountUp from 'react-countup';
import "./Admin.css"

const Dashboard = () => {
  const [customerData,setCustomerData] = useState([]);
  const [vendorData,setVendorData] = useState([]);
  const [bookingData,setBookingData] = useState([]);
  const [bookedData,setBookedData] = useState([]);

  
    useEffect (() => {
        getData ()
    },[])
    const getData = async () => {
        try{
            const response = await fetch ("http://localhost:5000/admin/customers")
        const result = await response.json();
        console.log(result.count)
        setCustomerData(result)
        }
        catch (error) {
            console.log(error)
        }
        try{
          const response = await fetch ("http://localhost:5000/admin/vendors")
      const result2 = await response.json();
      console.log(result2.count)
      setVendorData(result2)
      }
      catch (error) {
          console.log(error)
      }
      try{
        const response = await fetch ("http://localhost:5000/admin/bookings")
    const result3 = await response.json();
    console.log(result3.count)
    setBookingData(result3)
    }
    catch (error) {
        console.log(error)
    }
    try{
      const response = await fetch ("http://localhost:5000/admin/booked")
  const result4 = await response.json();
  setBookedData(result4)
  }
  catch (error) {
      console.log(error)
  }
        
    }
    return (
        <div >
          <AdminNavbar/>
          <div className="container graphs mt-5">
            <div className='row padding'>
              {customerData.count === 0 && vendorData.count === 0  ?<h6 className='text-center mb-4'>There are no registered customers and vendors</h6>:
              <>
              <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
              <Bar
            height={400}
            width={500}
            data= {{
                labels: ['customers', 'vendors'],
                datasets: [{
                    label: 'Number of customers and vendors',
                    data: [customerData.count,vendorData.count],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor:[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options= {{
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                maintainAspectRatio:false
            }}

        />
              </div>
              <div className='col-lg-4 mb-3'>
              <Pie
            height={400}
            width={500}
            data= {{
                labels: ["Customers","vendors"],
                datasets: [{
                    label: 'Stock Remaining',
                    data: [customerData.count,vendorData.count],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor:[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options= {{
               
                maintainAspectRatio:false
            }}
        />
              </div>
              </>
}
              
              <div className='col-lg-4'>
              <Bar
            height={400}
            width={500}
            data= {{
                labels: ['Bookings', 'Accepted'],
                datasets: [{
                    label: 'Bookings',
                    data: [bookingData.count,bookedData.length],
                    backgroundColor: [
                        '#00FFFF',
                        '#228B22',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderColor:[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options= {{
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                maintainAspectRatio:false
            }}

        />
              </div>
            </div>
          
        </div>
        </div>
    )
}
export default Dashboard;