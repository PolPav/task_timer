import React, { Component } from 'react';

class Timer extends Component {

  constructor(props) {

    super(props);
    this.state = {

          pastTime: 0,
          value: '',
          startTimer: 1,
          buttonText: 'Start'
    };
  }

  toggleTimer = (event) => {

    this.nowDate = Date.now();
    const elem = event.target;
    const resultTime = elem.parentNode.previousSibling.firstChild.firstChild.textContent;

      if(this.state.startTimer === 1){

        this.timer = setInterval(
          () => this.differenceTime(),
          1000
        );

        this.setState({buttonText: 'Stop'});
        this.state.startTimer = 0;

      }

      else if(this.state.startTimer === 0) {

        clearInterval(this.timer);

        this.setState({value: resultTime});
        this.setState({buttonText: 'Start'});
        this.state.startTimer = 1;
      }
  };


  differenceTime = () => {

    this.setState({pastTime: new Date() - this.nowDate});
  };

  initTimer = () => {

    let pastTime = Math.round(this.state.pastTime / 1000);
    let seconds = pastTime % 60;

    pastTime = pastTime - seconds;
    pastTime = Math.round(pastTime / 60);
    let minutes = pastTime % 60;

    pastTime = pastTime - minutes;
    pastTime = Math.round(pastTime / 60);
    let hours = pastTime % 60;

    if(seconds < 10){
      seconds = `0${seconds}`;
    }

    if(minutes < 10){
      minutes = `0${minutes}`;
    }

    if(hours < 10){
      hours = `0${hours}`;
    }

    return {seconds: seconds, minutes: minutes, hours: hours}
  };

  render() {

    const timerInit = this.initTimer();

    return (
      <div className='wrap_timer'>
        <div className='wrap_timer_stopped'>
          <h3>{timerInit.hours+":"+timerInit.minutes+":"+timerInit.seconds}</h3>
        </div>
        <div className='wrap_timer_buttons'>
          <button id='toggleButton' className='wrap_timer_button' onClick={this.toggleTimer}>{this.state.buttonText}</button>
        </div>
        <div>
          <h3>{this.state.value}</h3>
        </div>
      </div>
    );
  }
}

export default Timer;


