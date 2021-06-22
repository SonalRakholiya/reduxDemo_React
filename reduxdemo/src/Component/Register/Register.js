import React from 'react'

const Register = () => {
    
    return (
        <div className="container " >
            <div className=" divbox login">
                <form>
                    <div className='col-sm-12 p-2'>
                        <div className='from-group d-flex'>
                            <input type='text' className="form-control txtinput " placeholder='FirstName' />
                            <input type='text' className="form-control txtinput " placeholder='LastName' />
                        </div>
                    </div>
                    <div className='col-md-12 p-2'>
                        <div className='from-group'>
                            <input type='text' className="form-control txtinput" placeholder='Email' />
                        </div>
                    </div>
                    <div className='col-md-12 p-2'>
                        <div className='from-group'>
                            <input type="date" className="form-control txtinput" name="BOD" placeholder="dd-MM-yyyy" />
                        </div>
                    </div>
                    <div className='col-md-12 p-2'>
                        <div className='from-group'>
                            <input type='text' className="form-control txtinput" placeholder='UserName' name="UserName" />
                        </div>
                    </div>
                    <div className='col-md-12 p-2'>
                        <div className='from-group'>
                            <input type='password' className="form-control txtinput" placeholder='Password' name="Password" />
                        </div>
                    </div>
                    <div className='col-md-12 p-2'>
                        <div className='from-group'>
                            <input type='password' className="form-control txtinput" placeholder='Confirm Password' name="ConfirmPassword" />
                        </div>
                    </div>
                    <div className='col-md-12 p-2'>
                        <div className='from-group btnGrp'>
                            <input type="checkbox" className="form-check-input txtinput" value="Remember me ?" />
                            <label class="form-check-label" >Remember me ?</label>
                            <input type='submit' className="form-control btnLogin" style={{ border: '2px solid #636464' }} value="Login" placeholder='Enter Name' ></input>
                        </div>
                    </div>

                    <div className='col-md-12 p-2 d-flex'>
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

export default Register
