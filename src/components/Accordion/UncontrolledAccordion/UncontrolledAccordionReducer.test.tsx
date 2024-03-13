import {StateType, TOGGLE_COLLAPSED, uncontrolledAccordionReducer} from "./UncontrolledAccordionReducer";

test('collapsed should be true', () => {
  // data
  const state: StateType = {
    collapsed: false
  }

  // action
  const newState = uncontrolledAccordionReducer(state, {type: TOGGLE_COLLAPSED});

  // expectation
  expect(newState.collapsed).toBe(true);
})

test('collapsed should be true', () => {
  // data
  const state: StateType = {
    collapsed: true
  }

  // action
  const newState = uncontrolledAccordionReducer(state, {type: TOGGLE_COLLAPSED});

  // expectation
  expect(newState.collapsed).toBe(false);
})

test('reducer should throw an error because of unknown action type', () => {
  // data
  const state: StateType = {
    collapsed: true
  }

  // action

  // expectation
  expect(() => uncontrolledAccordionReducer(state, {type: 'FAKE-TYPE'}))
      .toThrowError('Unknown action type');
})