import React from 'react';
import { connect } from 'react-redux';
import { getWorkouts } from '../actions/actions.js';
import { setWorkoutType } from '../actions/actions.js';


class selectWorkout extends React.Component{

    constructor(){
        super();

        this.setWorkout = this.setWorkout.bind(this);

        this.state = {
            workout: 1,
        }
    }

    componentDidMount() {
        this.props.dispatch(getWorkouts());
    }

    setWorkout(){
        const select = document.getElementById('selectWorkout');
        this.setState({
            workout: select.value,
        })

        this.props.dispatch(setWorkoutType(this.state.workout));
    }



    render(){

        return(
            <div className="formgroup">
                <label>Choose your workout</label>

                <select id="selectWorkout" onChange={this.setWorkout}>
                {this.props.done ?

                    this.props.workout.workouts.map(function(item){
                        return ( <option key={item.id} value={item.id} >{item.name}</option> )
                    })

                : ''}
                </select>
            </div>
        )
    }
}

export default connect(state => ({
    workout: state.main.workouts,
    done: state.main.done,
    pending: state.main.pending,
}))(selectWorkout);
