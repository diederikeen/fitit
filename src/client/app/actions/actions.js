export function setName(name){
    return { type: 'SET_NAME', name };
}

//General functions for API calls
export function getDataPending(){
    return {type: 'GET_DATA_PENDING' };
}

export function getDataFail(err){
    console.log(err);
    return {type: 'GET_DATA_FAIL', err};
}


//Specific succes actions for API Calls
export function getWorkoutSucces(data){
    return {type: 'GET_WORKOUT_SUCCES', data};
}

export function getExerciseSucces(data){
    console.log(data);
    return {type: 'GET_EXERCISE_SUCCES', data};
}


//Dispatch sorts
export function setWorkoutType(id){
    return{type: 'SET_WORKOUT_TYPE', id};
}

export function setExercise(id){
    return{type: 'SET_EXERCISE_TYPE', id};
}

export function startWorkout(data) {
    return{type: "START_WORKOUT", data};
}

//API calls
export function getWorkouts(){
    return (dispatch, newState) => (
        new Promise((resolve, reject) => {
            dispatch(getDataPending());
            fetch('app/data/data.json', {method: 'get'})
                .then(res => res.json())
                .then(data => {
                    dispatch(getWorkoutSucces(data.workouts));
                })
                .catch(err => {
                    dispatch(getDataFail(err));
                });
        })
    );
}

export function getExercises(){
    return (dispatch, newState) => (
        new Promise((resolve, reject) => {
            dispatch(getDataPending());
            fetch('app/data/data.json', {method: 'get'})
                .then(res => res.json())
                .then(data => {
                    dispatch(getExerciseSucces(data.exercises));
                })
                .catch(err => {
                    dispatch(getDataFail(err));
                });
        })
    );
}

