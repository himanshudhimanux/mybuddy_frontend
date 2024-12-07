import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import api from '../../utils/api';
import { loginSuccess } from '../../features/auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      const { user, token, role } = response.data;
      localStorage.setItem('token', token); // Save token locally
      dispatch(loginSuccess({ user, token, role }));
      alert('Login Successful!');
      navigate('/')
    } catch (error) {
      console.error(error);
      alert('Login Failed');
    }
  };

  return (
    <div className="auth-section">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
          <div className="authContainer">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-block btn-primary" type="submit">
                Login
              </button>
              
            </form>
            <hr />
            <p>
              Don&#39;t have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
