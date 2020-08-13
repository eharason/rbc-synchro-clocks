import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './App';
import clock, { setHour, setMinutes } from './features/clock/clockSlice';

describe('clock reducer', () => {
  it('should handle initial state', () => {
    expect(clock(undefined, {})).toEqual({
      'hour': (new Date().getHours() < 10 ? '0' : '') + new Date().getHours(),
      'minutes': (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()
    })
  })

  it('should update hour value', () => {
    const hourInput = 23;
    expect(
      setHour(hourInput)
    ).toEqual({"payload": hourInput, "type": "clock/setHour"})
  })

  it('should update minutes value', () => {
    const minutesInput = 14;
    expect(
      setMinutes(minutesInput)
    ).toEqual({"payload": minutesInput, "type": "clock/setMinutes"})
  })
})

const mockStore = configureStore([]);

describe('digital and analog times', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      hour: 12,
      minutes: 22
    });
 
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON().toMatchSnapshot());
  });
 
  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      myAction({ payload: 'sample text' })
    );
  });
})
// test, when changing value somewhere, it's dispatching the info
// update one component,
// update the other component