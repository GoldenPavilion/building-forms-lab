export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log('It works')
      return { ...state, bands: [...state.bands].concat(action.band) }
    default:
      return state
  }
};
