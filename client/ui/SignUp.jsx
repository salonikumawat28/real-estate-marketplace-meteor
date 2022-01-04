import React from "react";

export const SignUp = () => {
    return (
         <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2>Create an Account</h2>
            <p class="hint-text">Sign up with your social media account or email address</p>
            <div class="social-btn text-center">
                <a href="#" class="btn btn-primary btn-lg"><i class="fa fa-facebook"></i> Facebook</a>
                <a href="#" class="btn btn-danger btn-lg"><i class="fa fa-google"></i> Google</a>
            </div>
            <div class="or-seperator"><b>or</b></div>
            <div class="form-group p-2">
                <input type="text" class="form-control input-lg" name="firstname" placeholder="First Name" required="required"/>
            </div>
            <div class="form-group p-2">
                <input type="text" class="form-control input-lg" name="lastname" placeholder="Last Name" required="required"/>
            </div>
            <div class="form-group p-2">
                <input type="email" class="form-control input-lg" name="email" placeholder="Email Address" required="required"/>
            </div>
            <div class="form-group p-2">
                <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required"/>
            </div>
            <div class="form-group p-2">
                <input type="password" class="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
            </div>  
            <div class="form-group p-2">
                <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
            </div>
        </form>
        <div class="text-center">Already have an account? <a href="#">Login here</a></div>
    </div>
    );
}