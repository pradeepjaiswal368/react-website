import react from "react";
import './Navbar.css';
function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <h1>eatarian</h1>

                    <ul>
                        <li>
                            English
                        </li>

                        <li id="signin-button">
                           <button> Sign in </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;