import React from 'react';
import { connect } from 'react-redux';
import { startWorkout } from '../actions/actions.js';
import { getWorkouts } from '../actions/actions.js';
import { setWorkoutType } from '../actions/actions.js';
import { setExercise } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';

import DynamicSelect from '../elements/select.jsx';


class StepOne extends React.Component{

    constructor(){
        super();
        this.setWorkout = this.setWorkout.bind(this);
        this.setExercise = this.setExercise.bind(this);
        this.startWorkout = this.startWorkout.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(getWorkouts());
      this.props.dispatch(getExercises());
    }

    setWorkout(){
      const select = document.getElementById('selectWorkout');
      this.props.dispatch(setWorkoutType(select.value))
    }

    setExercise(){
      const select = document.getElementById('selectExercise');
      console.log(select.options[select.selectedIndex].text)
      this.props.dispatch(setExercise(select.value))
    }

    startWorkout(){
      this.props.dispatch(startWorkout(true));
    }

    render(){
        return(
            <div>
                <div className="form__group">
                    <label>Select workout</label>
                    <DynamicSelect onChange={this.setWorkout} id="selectWorkout">
                      {this.props.workouts.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </DynamicSelect>
                </div>
                <div className="form__group">
                    <label>Select your starting exercise</label>
                    <DynamicSelect onChange={this.setExercise} id="selectExercise">
                      {this.props.exercises.filter(exercise => exercise.workout_id === parseInt(this.props.workout_type)).map(exercise => (
                        <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                      ))}
                    </DynamicSelect>
                </div>
                <button className="btn btn--primary" onClick={this.startWorkout}>Next step</button>
            </div>
        )
    }
}

export default connect(state => ({
    workouts: state.main.workouts,
    workout_type: state.main.workout_type,
    exercises: state.main.exercises,
    session_start: state.main.session_start,
    done: state.main.done,
    pending: state.main.pending,
}))(StepOne);
