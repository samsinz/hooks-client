import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
import useAuth from "./auth/useAuth";

import "./styles/app.css";
import AddHookForm from "./components/Forms/AddHookForm";
import Hooks from "./pages/Hooks";

function App() {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <div className="App">
      {isLoggedIn ? <NavMain /> : true}

      <div className="Panel">
        <Routes>
          <Route element={<LoggedOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            {/* All routes after the PrivateRoute require the user to be loggedIn */}
            <Route path="/partners/create" element={<AddHookForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partners/:id" element={<Hooks />} />

          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
