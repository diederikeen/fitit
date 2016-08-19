import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav.jsx';

import { getWorkouts } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';
import { getMuscles } from '../actions/actions.js';
import { getSessions } from '../actions/actions.js';

class Dashboard extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.dispatch(getSessions());
    this.props.dispatch(getWorkouts());
    this.props.dispatch(getExercises());
  }
  
  render(){
    console.log(this.props.sessions,this.props.done)
    return(
      <div>
        <Nav/>
        <div className="container">
          <h2>Dashboard</h2>
            <div className="block--row">
              <div className="block block--half">
                <h3>Personal Records</h3>
                <p>

                </p>
            </div>
            <div className="block block--half">
              <h3>History</h3>
              {/*
              {this.props.done === true ?
                
                this.props.sessions.map(session => (
                  <div key={session.id}>
                    {session.exercises.map(exercise => (
                      <div key={exercise.id}>
                        {exercise.sets.map(data => (
                          <div key={exercise.id}>
                            {data.amount} - {data.weight}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))
              : ''}
              */}
            </div>
          </div>
          <div className="block block--full">
            <h3>Progress</h3>
            <p>

            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  workouts: state.main.workouts,
  exercises: state.main.exercises,
  sessions: state.main.sessions,
  done: state.main.done,
  pending: state.main.pending,
}))(Dashboard);
