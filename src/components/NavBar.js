import {
  faChartPie,
  faCircleDollarToSlot,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <div className="navItem">
          <FontAwesomeIcon color="white" icon={faChartPie} />
          <a href="/dashboard" key="dashboard">
            Dashboard
          </a>
        </div>
        <div className="navItem">
          <FontAwesomeIcon color="white" icon={faCircleDollarToSlot} />
          <a href="/payroll" key="payroll">
            Payroll
          </a>
        </div>
        <div className="navItem">
          <FontAwesomeIcon color="white" icon={faCircleInfo} />
          <a href="/about" key="about">
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
