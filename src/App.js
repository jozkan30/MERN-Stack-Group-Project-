import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Nav from "./components/Nav.jsx";
import Items from "./screens/AllListings.jsx";
import Home from "./screens/Home.jsx";
import ItemEdit from "./screens/EditItem.jsx";
import ItemCreate from "./screens/AddListing";
import ListingDetail from "./screens/ListingDetail.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Footer from "./components/Footer";


import { verifyUser } from './services/users'



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/add-listing" element={<ItemCreate />} />
          <Route path="/items/:id" element={<ListingDetail />} />
          <Route path="/items/:id/edit" element={<ItemEdit />} />
          <Route path="/sign-up" element={<SignUp setUser = {setUser}/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
