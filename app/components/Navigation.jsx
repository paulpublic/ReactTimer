var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text"> React Times App</li>
          <li>
            <Link to='/' activeClassName='active'>Times</Link>
          </li>
          <li>
            <Link to='/' activeClassName='active'>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by Paul
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
