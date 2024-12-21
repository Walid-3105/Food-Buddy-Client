import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import NavBar from "../../Shared/NavBar";

const Login = () => {
  const { userLogin, signInWithGoogle, updateEmail } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    updateEmail(email);

    userLogin(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result);
        toast.success("Successfully Log In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Give Correct Password & Email");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <div className="w-full flex justify-center items-center py-14">
          <div className="card w-full max-w-xs md:max-w-sm lg:max-w-lg shrink-0 p-10 bg-gradient-to-r from-orange-100 via-gray-100 to-blue-300 text-gray-800">
            <h2 className="text-2xl font-semibold text-center">
              Login Your Account
            </h2>
            <form onSubmit={handleLogin} className="card-body pb-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4 bottom-[46px]"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>

                <label className="label">
                  <Link
                    to="/auth/forgetPassword"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              {error.login && (
                <label className="label text-red-600">{error.login}</label>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-8 ">
              <div className="flex items-center justify-center my-2 ">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-600">Or Sign In With</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <div className="flex items-center justify-center pb-1">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex text-center items-center btn text-xl border-gray-400 rounded-lg"
                >
                  <FcGoogle></FcGoogle>
                  Google
                </button>
              </div>
            </div>

            <p className="text-center font-semibold">
              Do not have a Account ?
              <Link to="/register" className="text-red-600 pl-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
