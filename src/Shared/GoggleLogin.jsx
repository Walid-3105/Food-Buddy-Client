import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoggleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Successfully Log In");
        // console.log(result.user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      {/* Goggle */}
      <div className="flex items-center justify-center pb-1">
        <button
          onClick={handleGoogleSignIn}
          className="flex text-center items-center btn text-xl  rounded-lg w-full bg-white border-2 border-[#023E8A] text-[#023E8A]"
        >
          <FcGoogle></FcGoogle>
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default GoggleLogin;
