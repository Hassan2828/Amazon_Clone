import React from "react";

function Login(){
    return (
      <section className="row">
        <section className="col-3 mx-auto mt-5">
        <div className="image mx-auto">
        <img src="png.png" className="logo" ></img>
        </div>
           <section className="border p-4 rounded">
            <h3 className="mb-4">Sign in</h3>
             {/* email */}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input 
              type="email" 
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your email..."
            />
          </div>
          {/* email -end */}
           {/* password */}
           <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your password..."
            />
          </div>
          {/* password -end */}
          <button className="btn btn-warning w-100 mb-3 mt-2">Login</button>

        <p className="text-small">
            By continuing, you agree to Amazon's <a href="#">Conditions of Use </a> and <a href="#">Privacy Notice</a>.
        </p>

        <a href="#" className="under">Need help?</a>
        <hr/>
        <p> Buying for work?</p>
        <a href="#" className="under">Shop on Amazon Business</a>
      
           </section>
        </section>
      </section>
    );
}

export default Login;