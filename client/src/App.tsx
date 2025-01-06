import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/signin" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
