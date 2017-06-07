const SET_STEPS = 'footer/SET_STEPS';
const SET_STEPS_ACTIVE = 'footer/SET_STEPS_ACTIVE';
const SET_AUTH = 'footer/SET_AUTH';

const initialState = {
  footerSteps: 5,
  footerStepsActive: 0,
  auth: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  	case SET_STEPS:
  		return {
  			...state,
  			footerSteps: action.footerSteps
  		}
  	case SET_STEPS_ACTIVE:
      return {
        ...state,
        footerStepsActive: action.footerStepsActive
      }
    case SET_AUTH:
  		return {
  			...state,
  			auth: action.set
  		}
    default:
      return state;
  }
}

export function setSteps(footerSteps) {
	return {
		type: SET_STEPS,
		footerSteps
	};
}

export function setStepsActive(footerStepsActive) {
	return {
		type: SET_STEPS_ACTIVE,
		footerStepsActive
	};
}

export function setAuth(set) {
  return {
    type: SET_AUTH,
    set
  };
}