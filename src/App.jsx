import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
