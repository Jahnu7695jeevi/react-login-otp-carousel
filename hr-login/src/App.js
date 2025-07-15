import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Company from './pages/Company';
import Admin from './pages/Admin';
import OpsView from './pages/OpsView';
import Vendor from './pages/Vendor';
import Scheduler from './pages/Scheduler';
import OrderManagement from './pages/OrderManagement';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/company" element={<Company />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/ops-view" element={<OpsView />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/scheduler" element={<Scheduler />} />
            <Route path="/order-management" element={<OrderManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;