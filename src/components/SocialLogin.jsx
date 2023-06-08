import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
         .then(result => {
            const loggedUser = result.user;
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(() => {
                navigate(from, {replace: true});
            })
         })
         .then(error => console.error(error.message))
    }

  return (
    <>
      <div className="divider">Or Continue With</div>
      <div className='text-center'>
        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
            <FaGoogle />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
