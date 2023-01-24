import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Items from "./screens/AllListings.jsx";
import Home from "./screens/Home.jsx";
import ItemEdit from "./screens/EditItem.jsx";
import ItemCreate from "./screens/AddListing";
import ListingDetail from "./screens/ListingDetail.jsx";

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
          <Route path="/items/:id" element={<ListingDetail />} />
          <Route path="/items/:id/edit" element={<ItemEdit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
