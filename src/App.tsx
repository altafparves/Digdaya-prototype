import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RegulatorDashboard } from './views/RegulatorDashboard';
import { FarmerDashboard } from './views/FarmerDashboard';
import { BuyerDashboard } from './views/BuyerDashboard';
import { RoleProvider, useRole } from './context/RoleContext';

const RoleBasedRouter = () => {
  const { role } = useRole();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${role}`} replace />} />
      <Route path="/regulator" element={role === 'regulator' ? <RegulatorDashboard /> : <Navigate to={`/${role}`} replace />} />
      <Route path="/farmer" element={role === 'farmer' ? <FarmerDashboard /> : <Navigate to={`/${role}`} replace />} />
      <Route path="/buyer" element={role === 'buyer' ? <BuyerDashboard /> : <Navigate to={`/${role}`} replace />} />
      <Route path="*" element={<Navigate to={`/${role}`} replace />} />
    </Routes>
  );
};

export default function App() {
  return (
    <RoleProvider>
      <Router>
        <Layout>
          <RoleBasedRouter />
        </Layout>
      </Router>
    </RoleProvider>
  );
}
