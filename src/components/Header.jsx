import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import {Link}  from 'react-router-dom'

const Header = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    alert('Logged out successfully!');
  };

  return (
    <>


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyBuddy</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isAuthenticated ? (
                <>
                  <p>Role: {role}</p>
                  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center float-right">
                  <li className="nav-item">
                    <Link className='nav-link me-3' to="/login">Log In</Link>
                    </li>
                  <li className="nav-item"><Link className='nav-link' to="/register">Sign Up</Link></li>
                </ul>
              )}
            </ul>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">


          </div> */}
        </div>
      </nav>

    </>

  );
};

export default Header;
