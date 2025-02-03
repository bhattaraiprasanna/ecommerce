import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch , FaShoppingCart , FaUser} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
        <div>
            <div>
                <Link to="/"> e-SHOP </Link>
            </div>
            <form >
                <input type="text" placeholder='Search Product' />
                <FaSearch  />
            </form>
        </div>
        <div>
            <Link to="/cart">
            <FaShoppingCart />
            </Link>
            <button>
                Login | Register
            </button>
            <button>
                <FaUser />

            </button>
        </div>
    </nav>
  )
}

export default Navbar
