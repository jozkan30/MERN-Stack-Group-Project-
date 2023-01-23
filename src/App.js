import "./App.css";
import { Routes, Route } from "react-router-dom";
<<<<<<<<< Temporary merge branch 1
import Nav from "./components/Nav.jsx";
import Items from "./screens/AllListings.jsx";
import Home from "./screens/Home.jsx";

import ItemCreate from "./screens/AddListing";
=========
import Nav from './components/Nav.jsx';
import Items from './screens/AllListings.jsx'
import Home from './screens/Home.jsx'

import ItemCreate from './screens/AddListing';

import ListingDetail from './screens/ListingDetail.jsx';
>>>>>>>>> Temporary merge branch 2


function App() {
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

          <Route path='/items/:id' element={<ListingDetail/>} />

    </Routes>
    </div>
>>>>>>>>> Temporary merge branch 2
    </div>
  );
}

export default App;
