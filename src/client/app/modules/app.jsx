import React from 'react';
import { connect } from 'react-redux';
import DynamicSelect from '../elements/select.jsx';
import SelectExercise from '../components/selectExercise.jsx';
import Nav from '../components/nav.jsx';
import AddFields from '../components/addFields.jsx';
import { getWorkouts } from '../actions/actions.js';
import { setWorkoutType } from '../actions/actions.js';
import { setExercise } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';
import { startWorkout } from '../actions/actions.js';

class App extends React.Component{
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

    setExercise(message){
      const select = document.getElementById('selectExercise');
      this.props.dispatch(setExercise(select.value))
    }

    startWorkout(){
      this.props.dispatch(startWorkout(true));
    }


    render(){
      
      return(
        <div>
          <Nav/>
          <div className="container">
            {this.props.session_start == false ? 
            <form>
                {/*This should be step one*/}
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

                <button type="button" onClick={this.startWorkout} className="btn btn--primary">Start workout</button>
              {/*End of step one*/}
            </form>
            : '' }

            {this.props.session_start == true ? 
              <form>
                <AddFields/>
              </form>
            : '' }
          </div>
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
}))(App);
