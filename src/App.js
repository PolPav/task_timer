import React, { Component } from 'react';
import Timer from './components/Timer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'
import TaskList from './containers/TaskList';

class App extends Component {

  constructor(props){
    super(props);
    this.store = createStore(allReducers);
  }

  render() {

    return (
      <div className='wrap_timer'>
        <Timer/>
        <Provider store={this.store}>
          <TaskList/>
        </Provider>
      </div>
    );
  }
}

export default App;
