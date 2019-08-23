import * as actionTypes from './actions/actions';

const initialState = {
    people : []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                people: state.people.concat({ 
                    id: Math.floor(Math.random() * 3000), 
                    name: action.personData.name, 
                    age: action.personData.age 
                })
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                people: state.people.filter(p => p.id !== action.personId)
            };
    }

    return state;
}

export default reducer;