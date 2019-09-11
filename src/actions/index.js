export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// add stuff
export const addFeature = id => {
  return { type: ADD_FEATURE, payload: id };
};

// remove stuff
export const removeFeature = id => {
  return { type: REMOVE_FEATURE, payload: id };
};

