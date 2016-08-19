import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav.jsx';

import { getWorkouts } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';
import { getMuscles } from '../actions/actions.js';

class CreateWorkouts extends React.Component{
  constructor(){
    super();
    this.setWorkoutName = this.setWorkoutName.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.setMuscleType = this.setMuscleType.bind(this);
    
    this.state = {
      primary_muscle_id: 1,
      nameWorkout: '',
    }

    const arr = [];
  }

  componentDidMount() {
    this.props.dispatch(getWorkouts());
    this.props.dispatch(getExercises());
    this.props.dispatch(getMuscles());
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

  setMuscleType(id){
    this.setState({
      primary_muscle_id: id,
    })
  }


render(){
  // console.log(this.props.exercises.filter(exercise => exercise.primary_muscle_id == this.state.primary_muscle_id).length)

  return(
    <div>
      <Nav/>
        <div className="container">
          <h2>Create your workouts</h2>
          <p>These will be displayed as soon as you start your workout on your mobile</p>
          

          <form>
            {/*Set workout name*/}
            <div className="form__group">
              <label>Name your workout</label>
              <input type="text" placeholder="Name workout" onChange={ev => this.setWorkoutName(ev.target.value)} />
            </div>
            {/*Show exercises*/}
            <div className="form__group">
              <label>Select the exercises for this workout</label>
              <div className="btn--tabs">
                {this.props.muscles.map(muscle => (
                  <button className="btn btn--tab" onClick={ev => this.setMuscleType(ev.target.dataset.id)} data-id={muscle.id} key={muscle.id}>{muscle.primary_muscle}</button>
                ))}
              </div>

              {this.props.exercises.filter(exercise => exercise.primary_muscle_id == this.state.primary_muscle_id).length > 0 ? 
                this.props.exercises.filter(exercise => exercise.primary_muscle_id === parseInt(this.state.primary_muscle_id)).map(exercise => (
                  <div key={exercise.id}>
                    <label className="label--input"><input onChange={ev => this.addExercise(exercise.id, ev.target.value)} type="checkbox" value={exercise.name} />{exercise.name}</label>
                  </div>
                ))
              :'You did not add anything to this muscle. For exercises to show up for a certain muscle add the muscle as "Primary Muscle". Visit this link to do'}
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
  muscles: state.main.muscles,
  done: state.main.done,
  pending: state.main.pending,
}))(CreateWorkouts);

