import React from 'react'
import PropTypes from 'prop-types';
import {
 Link
} from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand text-primary" to="/">
       <b>{props.title}</b>
      </Link>
      <Link className="navbar-brand text-primary" to="/">
       <b>Home</b>
      </Link>
      <Link className="navbar-brand text-primary" to="/about">
       <b>About</b>
      </Link>
     
   { props.Search ? <form className="d-flex" role="search">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form> : <p className="text-primary">no search bar</p> }
      
    </div>
  </nav>
  )

}
Header.defaultProps = {
    title:"my List",
    
  }

Header.propTypes = {
    title: PropTypes.string,
    Search: PropTypes.bool.isRequired
    
  };

