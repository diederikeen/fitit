import React from 'react';
import { connect } from 'react-redux';
import { startWorkout } from '../actions/actions.js';
import { getWorkouts } from '../actions/actions.js';
import { setWorkoutType } from '../actions/actions.js';
import { setExercise } from '../actions/actions.js';
import { getExercises } from '../actions/actions.js';

import DynamicSelect from '../elements/select.jsx';
import DubbleInput from '../elements/input-dubble.jsx';


class StepTwo extends React.Component{

    constructor(){
        super();
        
        this.setSets = this.setSets.bind(this);
        
        this.state = {
          reps: 0,
        }
    }


    setSets(value){
      this.setState({
        reps: parseInt(value),
      });
    }

    render(){
        return(
            <div>
              <div className="form__group">
                <label className="label__inline">Amount of sets</label>
                <div className="btn__container--square">
                  <button onClick={ev => this.setSets(ev.target.value)} className="btn btn--square" type="button" value="2">2 Sets</button>
                  <button onClick={ev => this.setSets(ev.target.value)} className="btn btn--square" type="button" value="3">3 Sets</button>
                  <button onClick={ev => this.setSets(ev.target.value)} className="btn btn--square" type="button" value="4">4 Sets</button>
                  <button onClick={ev => this.setSets(ev.target.value)} className="btn btn--square" type="button" value="5">5 Sets</button>
                </div>
                <div data-submit-form>
                  <div className="form__group">
                    {new Array(this.state.reps).fill(0).map((i, index) => (
                        <DubbleInput key={index}/>
                    ))}
                  </div>
                </div>
              <div className="btn__container--inline">
                <button type="button" disabled className="btn btn--primary">Save exercise</button>
              </div>
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
}))(StepTwo);
