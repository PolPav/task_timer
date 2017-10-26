import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Timer from './components/Timer';
import allReducers from './reducers';

let store = createStore(allReducers);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {past_time: 0, init: 0};
  }

  toggleTimer = () => {

    let button = document.getElementById('toggleButton');

    if(button.innerHTML === 'Start'){
        this.timer = setInterval(
          () => this.differenceTime(),
          1000
        );
      button.innerHTML = 'Stop';

    } else {
        clearInterval(this.timer);
        button.innerHTML = 'Start';
    }
  };

  differenceTime = () => {
    this.setState({past_time: new Date() - this.props.start});
  };

  render() {
    let past_time = Math.round(this.state.past_time / 1000);

    let seconds = past_time % 60;
        past_time = past_time - seconds;
        past_time = Math.round(past_time / 60);
    let minutes = past_time % 60;
        past_time = past_time - minutes;
        past_time = Math.round(past_time / 60);
    let hours = past_time % 60;

        if(seconds < 10){
           seconds = "0"+seconds;
        }

        if(minutes < 10){
           minutes = "0"+minutes;
        }

        if(hours < 10){
           hours = "0"+hours;
        }

    return (
      <div className={'wrap_timer'}>
        <input className={'wrap_timer_input'} value={hours+":"+minutes+":"+seconds}/>
        <div className={'wrap_timer_buttons'}>
          <button id={"toggleButton"} className={'wrap_timer_button'} onClick={this.toggleTimer}>Start</button>
        </div>

        {/*<Provider store={store}>*/}
              {/*<Timer/>*/}
        {/*</Provider>*/}
      </div>
    );
  }
}

export default App;
