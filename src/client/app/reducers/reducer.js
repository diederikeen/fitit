const initialState = {
    name: '',
    pending: null,
    done: null,
    workouts: [],
    workout_type: 1,
    exercise_type: 1,
    exercises: [],
}

export default function mainReducer(state = initialState, action){

    if (action.type == "SET_NAME") {
        return {
            ...state,
            name: action.name,
        }
    }

    if (action.type == "GET_DATA_PENDING") {
        return {
            ...state,
            pending: true,
            done: false,
        }
    }

    if (action.type == "SET_WORKOUT_TYPE") {
        return{
            ...state,
            workout_type: action.id
        }
    }

    if (action.type == "SET_EXERCISE_TYPE") {
        return{
            ...state,
            exercise_type: action.id
        }
    }


    if (action.type == "GET_EXERCISE_SUCCES") {
        return {
            ...state,
            exercises: action.data,
            pending: false,
            done: true,
        }
    }

    if (action.type == "GET_WORKOUT_SUCCES") {
        return {
            ...state,
            workouts: action.data,
            pending: false,
            done: true,
        }
    }

    return state;
}
