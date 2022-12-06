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
        <Route path="/pokemonapps" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/pokemonapps/ls" element={<LoginSuccess />} />
        <Route path="/pokemonapps/rs" element={<RegisterSuccess />} />
        <Route path="/pokemonapps/fs" element={<ResetSuccess />} />
        <Route path="/pokemonapps/login" element={<Login />} />
        <Route path="/pokemonapps/register" element={<Register />} />
        <Route path="/pokemonapps/forgotpassword" element={<Forgot />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;