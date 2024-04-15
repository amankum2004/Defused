import "./style.css"

export const Forget = () => {
    return (
        <>
        <div className="container-fluid">
		<div className="row">
			<div className="col-lg-6 col-md-6 form-container">
				<div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box">
					<div className="logo mt-5 mb-3 text-center">
						<img src="/images/sbt logo sm.jpg"/>
					</div>
					<div className="reset-form d-block">
						<form className="reset-password-form">
							<h4 className="mb-3">Reset Your Password</h4>
							<p className="mb-3 text-white">
								Please enter your email address and we will send you a password reset link
							</p>
							<div className="form-input">
								<span><i className="fa fa-envelope"></i></span>
								<input type="email" placeholder="Email Address" required/>
							</div>
							<div className="mb-3">
								<button type="submit" className="btn">Send Reset link</button>
							</div>
						</form>
					</div>
					<div className="reset-confirmation d-none">
						<div className="mb-4">
							<h4 className="mb-3">Link sent</h4>
							<h6 className="text-white">Please, check your inbox</h6>
						</div>
						<div>
							<a href="/login">
								<button type="submit" className="btn">Login Now</button>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
		</div>
	</div>
        </>
    )
}

