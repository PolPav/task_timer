import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startTime} from '../actions/index';
import {stopTime} from '../actions/index';

class TaskList extends Component{

  showTaskList(){
    return this.props.tasks.map((task) => {
      return (
        <tr>
          <td>{task.id}</td>
          <td>{task.taskName}</td>
          <td>{task.startTime}</td>
          <td>{task.endTime}</td>
          <td>{task.spentTime}</td>
          <td><button>info</button></td>
          <td><button>delete</button></td>
        </tr>
      )
    })
  }

  render(){

    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>№</td>
            <td>Name of task</td>
            <td>Time start</td>
            <td>Time stop</td>
            <td>Time spent</td>
            <td><button>info</button></td>
            <td><button>delete</button></td>
          </tr>
            {this.showTaskList()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      tasks: state.tasks
  }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({startTime: startTime, stopTime: stopTime}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);