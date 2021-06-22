import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {

    const handleSubmit = () => {
        alert("Submitting")
    }

    return (
        <div className="container">

            <div className="divbox login">
                <form onSubmit={() => handleSubmit()}>
                    <div className='col-sm-12 mb-2 p-2'>
                        <div className='from-group '>
                            <input type='text' className="form-control txtinput" placeholder='Username' />
                        </div>

                    </div>
                    <div className='col-md-12 mb-2 p-2'>
                        <div className='from-group'>
                            <input type='text' className="form-control txtinput" placeholder='Password' />
                        </div>
                    </div>
                    <div className='col-md-12 mb-2 p-2'>
                        <div className='from-group btnGrp'>
                            <input type="checkbox" className="form-check-input txtinput" value="Remember me ?" />
                            <label class="form-check-label" >Remember me ?</label>
                            <input type='submit' className="form-control btnLogin" style={{ border: '2px solid #636464' }} value="Login" placeholder='Enter Name' ></input>
                        </div>
                    </div>
                    <div className='col-md-12 mb-2 p-2 d-flex'>
                        <div className='col-md-6 from-group'>
                            <input type='button' className="btn btnForgetPassword " value="Forget UserName ?"  ></input>
                        </div>
                        <div className='col-md-6 from-group'>
                            <input type='button' className="btn btnForgetPassword " value="Forget Password ?"  ></input>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
