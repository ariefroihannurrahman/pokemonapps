import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSuccess from './components/LoginSuccess';
import RegisterSuccess from './components/RegisterSuccess';
import ResetSuccess from './components/ResetSuccess';

const Home = lazy(() => import('./routes/Home'));
const Login = lazy(() => import('./routes/Login'));
const Register = lazy(() => import('./routes/Register'));
const Forgot = lazy(() => import('./routes/Forgot'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ls" element={<LoginSuccess />} />
        <Route path="/rs" element={<RegisterSuccess />} />
        <Route path="/fs" element={<ResetSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgot />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;