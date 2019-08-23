export const ADD_PERSON = "ADD_PERSON";
export const REMOVE_PERSON = "REMOVE_PERSON";


export const addPerson = (name, age) => ({
    type: ADD_PERSON,
    personData: { name, age }
})

export const removePerson = id => ({ 
    type: REMOVE_PERSON, 
    personId: id
});