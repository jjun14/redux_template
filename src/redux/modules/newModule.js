/* use this file to create new modules */

/* template for a new reducer */
/* don't forget to import and use this in reducer.js */
export default function reducer(state=[], action={}){
  switch(action.type) {
    default:
      return state
  }
}

/* create action creator functions here */

function newAction(){
  return {
    type: "ACTION_TYPE"
    // payload here
  }
}