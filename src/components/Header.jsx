import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Header = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    toast.success('Logout Successfully')
    navigate('/login')

  };

  return (
    <>


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 className="text-2xl font-bold text-blue-600">My Buddy</h1>
          </Link>

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
