import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListSellerComponent from './components/ListSellerComponent';
import AddSellerComponent from './components/AddSellerComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <Routes>
            <Route exact path = "/" element = {<ListSellerComponent/>}></Route>
            <Route path = "/clients" element = {<ListSellerComponent/>}></Route>
            <Route path = "/editcampaign" element = {<AddSellerComponent/>}></Route>
            <Route path = "/edit-seller/:id" element = {<AddSellerComponent/>}></Route>

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
