import React from "react";

const Auth = () => (
  <div>
    <form>
      <input type="text" placeholder="Email" required />
      <input type="text" placeholder="Password" required />
      <input type="text" value="Log In" />
    </form>
    <div>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  </div>
);
export default Auth;
