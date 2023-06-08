import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png';
import './login.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../components/SocialLogin';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const handleLogin = event  => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        
        login(email, password)
         .then(()=> {
            Swal.fire(
                'Success!',
                'User login successfully!',
                'success'
              ) 
            form.reset();
            navigate(from, {replace: true});
         })
         .catch(error => setError(error.message))
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            Swal.fire({
                title: 'Warning!',
                text: 'Captcha Does Not Match',
                icon: 'warning',
                confirmButtonText: 'Ok'
              })
              setDisabled(true)
        }
    }

    useEffect( () => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <section className='bg-container'>
            <div className='bg-login'>
                <div className="hero min-h-screen">
                    <div className="w-full flex justify-between items-center flex-col lg:flex-row">
                        <div className="w-2/3 lg:w-1/2">
                            <img src={loginImg} alt="logo" />
                        </div>
                        <div className="card w-full lg:w-1/2">
                            <div className="card-body p-16">
                                <h3 className='text-4xl font-semibold text-center mb-12'>Login</h3>
                                <form onSubmit={handleLogin} className='space-y-7'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input required type="email" placeholder="Your email" name="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Password</span>
                                        </label>
                                        <input required type="password" placeholder="Your password" name="password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <input onBlur={handleValidateCaptcha} ref={captchaRef} required type="text" name="captcha" placeholder='Type here' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        {error && <p className='text-red-600 pb-2'><small>{error}</small></p>}
                                        <input disabled={disabled} type="submit" value="Sign In" className='btn text-white bg-[#D1A054] btn-warning' />
                                    </div>
                                    <p className='text-[#D1A054] font-medium text-xl text-center'>New here? <Link to='/signUp' className='font-bold'>Create a New Account</Link></p>
                                </form>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;