import React from 'react';
import { connect } from 'react-redux';
import DynamicSelect from '../elements/select.jsx';
import Nav from '../components/nav.jsx';
import StepOne from '../components/stepOne.jsx';
import StepTwo from '../components/stepTwo.jsx';

class StartWorkout extends React.Component{
    constructor(){
      super();
    }

    render(){
      return(
        <div>
          <Nav/>
          <div className="container">
            {this.props.session_start == false ? 
              <StepOne/>
            : ''}

            {this.props.session_start == true ? 
              <StepTwo/>
            : ''}
            
          </div>
        </div>
      )
    }
}

export default connect(state => ({
  workouts: state.main.workouts,
  exercises: state.main.exercises,
  workout_type: state.main.workout_type,
  exercise_type: state.main.exercise_type,
  session_start: state.main.session_start,
  done: state.main.done,
  pending: state.main.pending,
}))(StartWorkout);
