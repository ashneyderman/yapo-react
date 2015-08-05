import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    var tasks = this.props.tasks;
    var removeFun = this.props.remove_task_fun;

    var tasks1 = this.props.tasks.map((task) => {
        return (
          <tr key={task.id}>
            <td>
              <Task task={task} 
                    remove_task_fun={removeFun} />
            </td>
          </tr>
        )
    });

    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <td >
              <table width="100%">
                <thead>
                  <tr>
                    <th width="10%">&nbsp;</th>
                    <th width="10%">#</th>
                    <th width="40%">Description</th>
                    <th width="40%">Estimate</th>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          {tasks1}
        </tbody>
      </table>
    )
  }
};

TaskList.propTypes = {
  tasks: React.PropTypes.array.isRequired,
  remove_task_fun: React.PropTypes.func.isRequired
};

export default TaskList;

