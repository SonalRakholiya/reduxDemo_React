import { useHistory } from 'react-router-dom'
const NavBar = () => {
    const history = useHistory();
    const handeClick = (actionlink) => { 

    }
    return (
        <div className="container ">
            <div className="divbox shadow-lg">
                <h2 className="text-center mt-4">Login/Register</h2>
                <h6 className="text-center text-secondary">Home/ LoginRegister</h6>
                <div className="tab">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active"  onClick={() =>  history.push('/')} >Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push('/register')}>Register</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar