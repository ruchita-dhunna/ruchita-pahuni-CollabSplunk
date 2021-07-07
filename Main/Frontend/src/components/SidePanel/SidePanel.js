import './sidepanel.css'

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from 'react-router-dom';
const SidePanel = () => {
  // const file = require("./../../assets/book.pdf");
  // console.log(file);
  return (
    <div className="sidebar p-0 ">
      <ul className="sidebar-item nav flex-column">
        <li className="nav-item  panel-item">

          <Link to='/' className='panel-item sidebar-text'>
            <span className="mr-3"><i class="fa fa-home" aria-hidden="true"></i></span>
            Dashboard <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item  panel-item sidebar-text">
          <Link to='/documentation' className='panel-item sidebar-text'>
            <span className="mr-3"><i class="fa fa-cogs" aria-hidden="true"></i></span>
            <span>
              Documentation
            </span>
          </Link>
        </li>
        <li className="nav-item panel-item">

          <Link to='/aboutus' className='panel-item sidebar-text'>
            <span className="mr-4"><i class="fa fa-info" aria-hidden="true"></i></span>
            About us
          </Link>

        </li>
        <li className="nav-item panel-item">

          <Link to='/table' className='panel-item sidebar-text'>
            <span className="mr-3"><i class="fa fa-table" aria-hidden="true"></i></span>
            Detailed Table
          </Link>

        </li>



      </ul>
    </div>
  )
}

export default SidePanel