import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import NaxaServices from './Pages/NaxaServices';
import Navbar from './Components/Navbar'; // Import Navbar

const App = () => (
  <Provider store={store}>
    <Router> 
      <Navbar /> 
      <div className="App">
        <Routes>
          <Route path="/" element={<NaxaServices />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
