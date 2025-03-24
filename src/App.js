import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm/LoginForm';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
