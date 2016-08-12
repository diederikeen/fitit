import React from 'react';
import { connect } from 'react-redux';
import DynamicSelect from '../elements/select.jsx';
import SelectExercise from '../components/selectExercise.jsx';
import AddFields from '../components/addFields.jsx';
import { getWorkouts } from '../actions/actions.js';
import { setWorkoutType } from '../actions/actions.js';
import { setExercise } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';

class App extends React.Component{
    constructor(){
      super();
      this.setWorkout = this.setWorkout.bind(this);
      this.setExercise = this.setExercise.bind(this);

    }
    componentDidMount() {
      this.props.dispatch(getWorkouts());
      this.props.dispatch(getExercises());
    }

    setWorkout(){
      const select = document.getElementById('selectWorkout');
      this.props.dispatch(setWorkoutType(select.value))
    }

    setExercise(message){
      const select = document.getElementById('selectExercise');
      this.props.dispatch(setExercise(select.value))
    }


    render(){
      return(
        <div className="container">
          <form>
              {this.props.done ?
                <div className="form__group">
                  <label>Select your workout</label>
                  <DynamicSelect onChange={this.setWorkout} id="selectWorkout">
                    {this.props.workouts.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </DynamicSelect>
                </div>
              :''}

              <div className="form__group">
                <label>Select your Exercise</label>
                <DynamicSelect onChange={this.setExercise} id="selectExercise">
                  {this.props.exercises.filter(exercise => exercise.workout_id === parseInt(this.props.workout_type)).map(exercise => (
                    <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                  ))}
                </DynamicSelect>
              </div>

              <button type="button" className="btn btn--primary">Start workout</button>
          </form>
        </div>
      )
    }
}

export default connect(state => ({
  workouts: state.main.workouts,
  exercises: state.main.exercises,
  workout_type: state.main.workout_type,
  done: state.main.done,
  pending: state.main.pending,
}))(App);
