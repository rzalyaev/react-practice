type ActionType = {
  type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';

export type StateType = {
  collapsed: boolean
}

export const uncontrolledAccordionReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return {...state, collapsed: !state.collapsed};
    default:
      throw new Error('Unknown action type');
  }
}