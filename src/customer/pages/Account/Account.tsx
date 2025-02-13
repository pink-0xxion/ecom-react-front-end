import { Divider } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Orders from './Orders';
import Orderdetails from './Orderdetails';

const menu = [
  { name: "Orders", path: "/account/orders" },
  { name: "Profile", path: "/account/profile" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
]

function Account() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: any) => navigate(item.path);

  return (
    <div className='px-5 lg:px-52 min-h-screen mt-10'>
      <div>
        <h1 className="text-xl font-bold pb-5">Zosh</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className='col-span-1 lg:border-r lg:pr-5 py-5 h-full'>
          {
            menu.map((item) => (
              <div 
              onClick={() => handleClick(item)} key={item.name} 
              className={`${item.path === location.pathname ? "bg-[#00927c] text-white" : ""} py-3 px-5 rounded-md cursor-pointer hover:text-white hover:bg-[#00927c] border-b`}>
                <p>{item.name}</p>
              </div>
            ))
          }
        </section>
        <section className='right lg:col-span-2 lg:pl-5 py-5'>
          {/* <Orders /> */}
          <Orderdetails />
        </section>
      </div>
    </div>
  )
}

export default Account



// useNavigate() is a React Router hook used for programmatic navigation dynamically inside functions or event handlers in a React app.
// different from <a> tag, static navigation

// useLocation() is a hook that returns the current URL details, including pathname, search parameters, and state.
// console.log(location.pathname); // Current path (e.g., "/home")
// console.log(location.search);   // Query params (e.g., "?id=123")
// console.log(location.state);    // Passed state (if any)

