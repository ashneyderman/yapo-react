import React       from 'react';
import helpers     from '../utils/Helpers';
import Rebase      from 're-base';
import TaskList    from './task/TaskList';

class TasksRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1,
         description: "Task 1",
         estimate: 5,
         actual: 0,
         completion: 0,
         subtasks: []},
        {id: 2,
         description: "Task 2",
         estimate: 2,
         actual: 1,
         completion: 50.0,
         subtasks: [
            {id: 100,
             description: "Task2 - subtask 1",
             estimate: 1,
             actual: 1,
             completion: 100.0},
            {id: 101,
             description: "Task2 - subtask 2",
             estimate: 1,
             actual: 0,
             completion: 0.0}
         ]},
        // {description: "Test task3",
        //  estimate: 2,
        //  actual: 1,
        //  completion: 50.0,
        //  subtasks: []},
        // {description: "Test task4",
        //  estimate: 2,
        //  actual: 1,
        //  completion: 50.0,
        //  subtasks: []}
      ]
    }
  }
  // username() {
  //   return this.context.router.getCurrentParams().username;
  // }
  // init() {
  //   this.ref = base.bindToState(this.username(), {
  //     context: this,
  //     asArray: true,
  //     state: 'notes'
  //   });
  //   helpers.getGithubInfo(this.username())
  //     .then((dataObject) => {
  //       this.setState({
  //         bio: dataObject.bio,
  //         repos: dataObject.repos
  //       });
  //     });
  // }
  // componentDidMount() {
  //   this.init()
  // }
  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }
  // componentWillMount() {
  //   this.router = this.context.router;
  // }
  // componentWillReceiveProps() {
  //   base.removeBinding(this.ref);
  //   this.init();
  // }
  handleAddTask() {
    var prevTasks = this.state.tasks;
    var newTask = {
      id: prevTasks.length + 1,
      description: `Task ${prevTasks.length + 1}`,
      estimate: 5,
      actual: 0,
      completion: 0.0,
      subtasks: []
    };
    this.setState({
      tasks: prevTasks.concat([newTask])
    });
  }
  handleRemoveTask(tid) {
    var newTasks = this.state.tasks;
    var length = newTasks.length;
    var i = length;

    while(i--) {
      if(newTasks[i].id === tid) {
        newTasks = newTasks
                      .slice(0,i)
                      .concat(newTasks.slice(i+1,length));
      }
    }

    this.setState({
      tasks: newTasks
    });
  }
  render() {
    return (
      <div className='row'>
        <a className="button" onClick={this.handleAddTask.bind(this)}> Add Task </a>
        <div className='col-md-12'>
          <TaskList tasks={this.state.tasks}
                    remove_task_fun={this.handleRemoveTask.bind(this)} />
        </div>
      </div>
    )
  }
};

TasksRepo.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default TasksRepo;
