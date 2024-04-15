import "./style.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";


// const URL = "http://localhost:27017/api/auth/register"

export const Register = () => {
    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        state:"",
        password:"",
    });

    // gender
    // const [gender, setGender] = useState('male');
    // const handleGenderChange = (event) => {
    //     setGender(event.target.value);
    // };

    const navigate = useNavigate();
    const {storeTokenInLS,API} = useAuth();

    // handling the input values
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    // handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        // alert(user)
        try{
            // const response = await fetch(URL,{
            const response = await fetch(`${API}/api/auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user)
            })
            // console.log(response)
            const res_data = await response.json();
            console.log("response from server",res_data.extraDetails);

            if (response.ok) {
                // STORE THE TOKEN IN LOCALHOST
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token",res_data.token);
                setUser({username:"",email:"",phone:"",password:"",state:""})
                toast.success("Registration successful")
                // navigate("/login")
                navigate("/")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        }catch (error) {
            console.log("register",error)
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
						<img src="image/logo.png" width="150px"/>
					</div> */}
					<div className="heading mb-3">
						<h4>Create an account</h4>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form-input">
							<span><i className="fa fa-user"></i></span>
							<input type="text"
                                    name="username"
                                    placeholder="Name"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput} />
						</div>
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
							<span><i className="fa fa-phone"></i></span>
							<input type="number"
                                    name="phone"
                                    placeholder="Enter your number"
                                    id="phone"
                                    required
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput} />
						</div>
						<div className="form-input">
							<span><i className="fa fa-birthday"></i></span>
							<input type="number"
                                    name="age"
                                    placeholder="Enter your Age"
                                    id="age"
                                    required
                                    autoComplete="off"
                                    value={user.age}
                                    onChange={handleInput} />
						</div>
                        <div className="form-input">
							<span><i className="fa fa-location"></i></span>
							<input type="text"
                                    name="state"
                                    placeholder="State"
                                    id="state"
                                    required
                                    autoComplete="off"
                                    value={user.state}
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
                        {/* <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1"/>
                            <input type="radio" name="gender" id="dot-2"/>
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender" >Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                            </div>
                        </div> */}
                        <div className="container">
    <div className="gender-label">Select your gender:
    <br />
    <input type="radio" id="male" name="gender" className="gender-input"/>
    <label htmlFor="male">Male</label>
    <input type="radio" id="female" name="gender" className="gender-input"/>
    <label htmlFor="female">Female</label>
    <input type="radio" id="other" name="gender" className="gender-input"/>
    <label htmlFor="other">Other</label>
    </div>
</div>
						<div className="row mb-3">
							<div className="col-12 d-flex">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cb1"/>
									<label className="custom-control-label text-white" htmlFor="cb1">I agree all terms & conditions</label>
								</div>
							</div>
						</div>
						<div className="text-left mb-3">
							<button type="submit" className="btn">Register</button>
						</div>
						<div className="text-white mb-3">or register with</div>
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
						<div className="text-white">Already have an account?
							<a href="/login" className="login-link">Login here</a>
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