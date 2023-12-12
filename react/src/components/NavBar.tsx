
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import LoginBadge from './LoginBadge.vue';
//import FlyoutPanel from './FlyoutPanel.vue';
//import ShoppingCart from './ShoppingCart.vue';
//import { count as cartCount } from "@/model/shoppingCart";

const LoginBadge = () => <div>login</div>;
const FlyoutPanel = ( { children, ...rest} : { children: React.ReactNode, className: string } ) => <div {...rest}>
  { children}
</div>;
const ShoppingCart = () => <div>cart</div>;
const cartCount = 0;

export default function NavBar() {

  const [isActive, setIsActive] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);


  return ( <>
  <nav className={`navbar ${ isShoppingCartOpen && "isShoppingCartOpen"}` } role="navigation" aria-label="main navigation" >
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img alt="Vue logo" className="logo" src="@/assets/logo.svg" width="28" height="28" />

      </a>

      <a role="button" className={"navbar-burger " + (isActive && 'is-active')}  onClick={()=> setIsActive(!isActive)} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className={"navbar-menu " + ( isActive ? 'is-active' : '') } >
      <div className="navbar-start">
        <NavLink className="navbar-item" to="/" >Home</NavLink>
        <NavLink className="navbar-item" to="/about">About</NavLink>
        <NavLink className="navbar-item" to="/products">Products</NavLink>
        <NavLink className="navbar-item" to="/map">Map</NavLink>
        
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              About
            </a>
            <a className="navbar-item">
              Jobs
            </a>
            <a className="navbar-item">
              Contact
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a className={"button " + ( isShoppingCartOpen && 'is-active' )} click="isShoppingCartOpen = !isShoppingCartOpen">
            <span className="icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <i className="tag is-danger is-rounded is-small" v-if="cartCount">{ cartCount }</i>
          </a>
        </div>
        <div className="navbar-item">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
  <FlyoutPanel className={ isShoppingCartOpen ? 'is-active' : '' }>
    <ShoppingCart />
  </FlyoutPanel>
  </>)
}

