import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../assets/shoes-logo.png'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = () => {
  const selector = useSelector(store => store.cart.items);

  return (
    <nav>
      <div className="nav-container">
      <Link to={'/'}>
        <img src={logo} alt="" style={{ width: '104px', height:'52px', objectFit: 'cover' }} />
      </Link>
      </div>
      <div className="profile-container">
        <Link>
          <FiHeart className="nav-icons" />
        </Link>
        <Link to={'/cart'}>
          <div style={{position:'relative', display:'inline-block', height:'100%'}}>
            <AiOutlineShoppingCart className="nav-icons" /> 
            <span className="cart-total">{selector.length}</span> 
          </div>
        </Link>
        <Link>
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
