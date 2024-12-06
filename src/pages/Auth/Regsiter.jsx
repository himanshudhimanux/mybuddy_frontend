import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Regsiter = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Teacher',
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      navigate("/dashboard");
    } catch (err) {
      console.error("Sign Up failed", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
                  value={setFormData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={setFormData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={setFormData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <select className="form-control" name="role" value={formData.role} onChange={handleChange}>
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