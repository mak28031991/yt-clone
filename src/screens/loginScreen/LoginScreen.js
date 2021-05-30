import React from "react";

import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"
          alt=""
        />
        <button>Login With Google</button>
        <p> This Project is made using YOUTUBE DATA API </p>
      </div>
    </div>
  );
};

export default LoginScreen;
