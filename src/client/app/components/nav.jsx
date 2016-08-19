import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { startWorkout } from '../actions/actions.js';

class Nav extends React.Component{
  constructor(){
    super();

    this.cancelWorkout = this.cancelWorkout.bind(this);
    this.openMenu = this.openMenu.bind(this);

    this.state = {
      menu: false,
    }
  }

  openMenu(){
    if (this.state.menu == false) {
      this.setState({
        menu: true
      });
    }else{
      this.setState({
        menu: false
      });
    }
  }

  cancelWorkout(){
    this.props.dispatch(startWorkout(false));
  }

  render(){
    return(

      <nav className="nav">
        <div className="container">
          <h1 className="title--main">FitIt</h1>
          <button data-open-menu onClick={this.openMenu} className="btn btn--transparent">Open menu</button>

          {this.props.session_start == true ? 
            <button className="btn btn--transparent" onClick={this.cancelWorkout}>Cancel session</button>
          : ''}

          {this.state.menu == true ? 
            <ul className="list open">
              <li className="list__item"><Link to="/dashboard">Dashboard</Link></li>
              <li className="list__item"><Link to="/add-workout">Create workout</Link></li>
              <li className="list__item"><Link to="/">Start workout</Link></li>
            </ul>
          : 
            <ul className="list">
              <li className="list__item"><Link to="/dashboard">Dashboard</Link></li>
              <li className="list__item"><Link to="/add-workout">Create workout</Link></li>
              <li className="list__item"><Link to="/">Start workout</Link></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}


export default connect(state => ({
  session_start: state.main.session_start,
}))(Nav);
