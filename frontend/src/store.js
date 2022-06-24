export const COLOR_ACTION_TYPES = {
  colorChange: 'colorChange',
  pick: 'pick',
};

const colorState = {
  picked: '',
  Laces: '#ffffff',
  Inner: '#ffffff',
  Outer: '#ffffff',
  Sole: '#ffffff',
};

const colorReducer = (state = colorState, action) => {
  switch (action.type) {
    case COLOR_ACTION_TYPES.colorChange:
      state[state.picked] = action.payload.color;
      console.log(action.payload);
      return { ...state };
    case COLOR_ACTION_TYPES.pick:
      console.log(action.payload);
      return { ...state, picked: action.payload.picked };
    default:
      return state;
  }
};

export default colorReducer;
