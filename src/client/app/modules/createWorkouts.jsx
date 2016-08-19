import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav.jsx';
import { getWorkouts } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';

class CreateWorkouts extends React.Component{
  constructor(){
    super();
    this.setWorkoutName = this.setWorkoutName.bind(this);
    this.addExercise = this.addExercise.bind(this);
    
    this.state = {
      nameWorkout: '',
    }

    const arr = [];
  }

  componentDidMount() {
    this.props.dispatch(getWorkouts());
    this.props.dispatch(getExercises());
  }

  setWorkoutName(value){
    this.setState({
      nameWorkout: value
    })
  }

  addExercise(id, value,){
    const obj = {
      id: id,
      name: value
    }
    this.setState({
      exercises: '',
    })
  }


render(){

  return(
    <div>
      <Nav/>
        <div className="container">
          <h2>Create your workouts</h2>
          <p>These will be displayed as soon as you start your workout on your mobile</p>
          

          <form>
            <div className="form__group">
              <label>Name your workout</label>
              <input type="text" placeholder="Name workout" onChange={ev => this.setWorkoutName(ev.target.value)} />
            </div>
            {/*Show exercises when done*/}
            <div className="form__group">
              <label>Select the exercises for this workout</label>
              {this.props.exercises.map(exercise =>(
                <div key={exercise.id}>
                  <label className="label--input"><input onChange={ev => this.addExercise(exercise.id, ev.target.value)} type="checkbox" value={exercise.name} />{exercise.name}</label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  workouts: state.main.workouts,
  exercises: state.main.exercises,
  done: state.main.done,
  pending: state.main.pending,
}))(CreateWorkouts);

