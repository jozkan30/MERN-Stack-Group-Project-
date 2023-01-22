import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Items from './screens/AllListings.jsx'
import Home from './screens/Home.jsx'
import ListingDetail from './screens/ListingDetail.jsx';

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
          <Route path='/items/:id' element={<ListingDetail/>} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
