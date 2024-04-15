import "./style.css"

import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import {toast} from "react-toastify";

// const URL = "http://localhost:27017/api/auth/login"

export const Login = () => {
    const [user,setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    // const {storeTokenInLS} = useAuth();
    const {storeTokenInLS,API} = useAuth();

    // handling the input values
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    // handling the form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(user)
        try {
            const response = await fetch(`${API}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            });
            console.log("from login form",response)
            console.log(response)
            const res_data = await response.json();

            if (response.ok) {
                console.log("response from server",res_data);
                // STORE THE TOKEN IN LOCALHOST
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token",res_data.token);
                setUser({email:"",password:""})
                toast.success("Login successful")
                navigate("/")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message ? res_data.message : "Invalid credentials")
                console.log("Invalid credentials")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <div className="container-fluid">
		<div className="row">
			<div className="col-lg-6 col-md-6 form-container">
				<div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
					{/* <div className="logo mt-5 mb-3">
						<img src="/images/sbt logo sm.jpg"/>
					</div> */}
					<div className="heading mb-3">
						<h4>Login into your account</h4>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form-input">
							<span><i className="fa fa-envelope"></i></span>
							<input type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput} />
						</div>
						<div className="form-input">
							<span><i className="fa fa-lock"></i></span>
							<input type="text"
                                    name="password"
                                    placeholder="Password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput} />
						</div>
						<div className="row mb-3">
							<div className="col-6 d-flex">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cb1"/>
									<label className="custom-control-label text-white" htmlFor="cb1">Remember me</label>
								</div>
							</div>
							<div className="col-6 text-right">
								<a href="/forget" className="forget-link">Forget password ?</a>
							</div>
						</div>
						<div className="text-left mb-3">
							<button type="submit" className="btn">Login</button>
						</div>
						<div className="text-white mb-3">or login with</div>
						<div className="row mb-3">
							<div className="col-4">
								<a href="https://www.facebook.com/" className="btn btn-block btn-social btn-facebook">
									<i className="fa fa-facebook"></i>
								</a>
							</div>
							<div className="col-4">
								<a href="https://www.google.com/" className="btn btn-block btn-social btn-google">
									<i className="fa fa-google"></i>
								</a>
							</div>
							<div className="col-4">
								<a href="https://twitter.com/" className="btn btn-block btn-social btn-twitter">
									<i className="fa fa-twitter"></i>
								</a>
							</div>
						</div>
						<div className="text-white">Do not have an account?
							<a href="/register" className="register-link">Register here</a>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
		</div>
	</div>
    </>
    )
}