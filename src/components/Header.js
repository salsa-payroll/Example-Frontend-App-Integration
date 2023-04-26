import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (      
  <div className='header'>
    <img className='logo' src='/logo.png' width="50" height="50" alt="logo"/>
    <h1>Union Mate</h1>
    <div className='profile'>
      <FontAwesomeIcon color='white' icon={faUser} className='profile-icon'/>
      <h4>Profile</h4>
    </div>
  </div>)
}

export default Header;