import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";


const Regsiter = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin', // Default role is teacher

  });
  
  const handleChange = (e) => {
    setUserData({ 
      ...userData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert(response.data.message || 'User registered successfully!');
      setUserData({
        name: '',
        email: '',
        password: '',
        role: 'teacher',
      });
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };


  return (
    <div className="auth-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
            <div className="authContainer">
              <h2>Register</h2>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Role:</label>
                  <select className="form-control" name="role" value={userData.role} onChange={handleChange}>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Account">Account</option>
                  </select>
                </div>
                <button className="btn btn-block btn-primary" type="submit">
                  Register
                </button>

              </form>
              <hr />
              <p>
                Already Have an Account <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regsiter