import { Link } from "react-router-dom";
import signUpImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
      createUser(data.email, data.password)
        .then(() => {
          updateUserProfile(data.name, data.photoURL)
          Swal.fire(
            'Success!',
            'Your account has been created successfully!',
            'success'
          );
          reset();
        })
        .catch(error => console.error(error.message))
  };

  return (
    <section className="bg-container">
      <div className="bg-login">
        <div className="hero min-h-screen">
          <div className="w-full flex justify-between items-center flex-col lg:flex-row">
            <div className="w-2/3 lg:w-1/2">
              <img src={signUpImg} alt="logo" />
            </div>
            <div className="card w-full lg:w-1/2">
              <div className="card-body p-16">
                <h3 className="text-4xl font-semibold text-center mb-12">
                  Sign Up
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register("name", { required: true })}
                      className="input input-bordered mb-1"
                    />
                    {errors.name && <small className="text-red-600">Name field is required</small>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Phot URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Photo URL"
                      {...register("photoURL", { required: true })}
                      className="input input-bordered mb-1"
                    />
                    {errors.photoURL && <small className="text-red-600">Photo URL field is required</small>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      {...register("email", { required: true, })}
                      className="input input-bordered mb-1"
                    />
                    {errors.email && <small className="text-red-600">Email field is required</small>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Your password"
                      {...register("password", {
                        required: true,
                        min: 6,
                        max: 10,
                        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                      })}
                      className="input input-bordered mb-1"
                    />
                    {errors.password?.type === 'required' && <small className="text-red-600">Password field is required</small>}
                    {errors.password?.type === 'min' && <small className="text-red-600">Your password must be at least 6 characters</small>}
                    {errors.password?.type === 'max' && <small className="text-red-600">Password field is required</small>}
                    {errors.password?.type === 'pattern' && <small className="text-red-600">Your password must contain at least one digit, uppercase, lowercase and special characters</small>}
                  </div>
                  <div className="form-control">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn text-white bg-[#D1A054] btn-warning"
                    />
                  </div>
                  <p className="text-[#D1A054] font-medium text-xl text-center">
                    Already registered?{" "}
                    <Link to="/login" className="font-bold">
                      Go to login
                    </Link>
                  </p>
                  <p className="font-medium text-xl text-center">
                    Or Sign In With
                  </p>
                  <div className="flex justify-center gap-4">
                    <img
                      alt="google"
                      className="bg-[#F5F5F8] p-4 rounded-full cursor-pointer"
                    />
                    <img
                      alt="google"
                      className="bg-[#F5F5F8] p-4 rounded-full cursor-pointer"
                    />
                    <img
                      alt="google"
                      className="bg-[#F5F5F8] p-4 rounded-full cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
