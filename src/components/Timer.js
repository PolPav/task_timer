import React, { Component } from 'react';

class Timer extends Component {

  constructor(props) {

    super(props);
    this.state = {past_time: 0, init:0, value: '', timeDefault: 0};
  }

  toggleTimer = () => {

    this.nowDate = Date.now();
    let button = document.querySelector('button#toggleButton');
    let timeResult = document.querySelector('h3#testText');

      if(button.innerHTML === 'Start'){
        this.timer = setInterval(
          () => this.differenceTime(),
          1000
        );

        button.innerHTML = 'Stop';

      } else {

        clearInterval(this.timer);
        button.innerHTML = 'Start';
        this.setState({value: timeResult.innerHTML});
      }
  };

  differenceTime = () => {

    this.setState({past_time: new Date() - this.nowDate});
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
        <div className={'wrap_timer_stopped'}>
          <h3 id={'testText'}>{hours+":"+minutes+":"+seconds}</h3>
        </div>
        <div className={'wrap_timer_buttons'}>
          <button id={'toggleButton'} className={'wrap_timer_button'} onClick={this.toggleTimer}>Start</button>
        </div>
        <div>
          <h3 id={'stoppedTime'}>{this.state.value}</h3>
        </div>
      </div>
    );
  }
}

export default Timer;


