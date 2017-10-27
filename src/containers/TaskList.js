import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startTime} from '../actions/index';
import {stopTime} from '../actions/index';

class TaskList extends Component{

  showTaskList(){
    return this.props.tasks.map((task) => {
      return (
        <tr key={task.id} className='wrap_timer_table_tr'>
          <td className='wrap_timer_table_tr_td'>{task.id}</td>
          <td className='wrap_timer_table_tr_td'>{task.taskName}</td>
          <td className='wrap_timer_table_tr_td'>{task.startTime}</td>
          <td className='wrap_timer_table_tr_td'>{task.endTime}</td>
          <td className='wrap_timer_table_tr_td'>{task.spentTime}</td>
          <td className='wrap_timer_table_tr_td'><button className='wrap_timer_table_button'>info</button></td>
          <td className='wrap_timer_table_tr_td'><button className='wrap_timer_table_button'>delete</button></td>
        </tr>
      )
    })
  }

  render(){

    return (
      <div>
        <table className='wrap_timer_table'>
          <tbody>
          <tr className='wrap_timer_table_tr'>
            <td className='wrap_timer_table_tr_td'>№</td>
            <td className='wrap_timer_table_tr_td'>Name of task</td>
            <td className='wrap_timer_table_tr_td'>Time start</td>
            <td className='wrap_timer_table_tr_td'>Time stop</td>
            <td className='wrap_timer_table_tr_td'>Time spent</td>
            <td className='wrap_timer_table_tr_td'><button className='wrap_timer_table_button'>info</button></td>
            <td className='wrap_timer_table_tr_td'><button className='wrap_timer_table_button'>delete</button></td>
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