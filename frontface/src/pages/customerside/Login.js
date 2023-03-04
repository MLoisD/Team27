import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <p>Member Login</p>

            <form>
                <div>
                    <label for="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>

                    <label for="psw"><b>Password:</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>


                    <label>
                        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</input>
                    </label>

                    <div class="clearfix">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <button type="submit" class="loginbtn">Login</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Login;