import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { startWorkout } from '../actions/actions.js';

class Nav extends React.Component{
  constructor(){
    super();

    this.cancelWorkout = this.cancelWorkout.bind(this);
  }

  cancelWorkout(){
    this.props.dispatch(startWorkout(false));
  }

  render(){
    return(

      <nav className="nav">
        <div className="container">
          <h1 className="title--main">FitIt</h1>
          {/*<ul>
            <li><Link to="/">Nav</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repo</Link></li>
          </ul>      
          */}

          {this.props.session_start == true ? 
            <button className="btn btn--transparent" onClick={this.cancelWorkout}>Cancel session</button>
          : ''}
        </div>
      </nav>
    )
  }
}


export default connect(state => ({
  session_start: state.main.session_start,
}))(Nav);
