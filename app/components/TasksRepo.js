import React       from 'react';
import helpers     from '../utils/Helpers';
import Rebase      from 're-base';
import TaskList    from './task/TaskList';

class TasksRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {description: "Test task1",
         estimate: 5,
         actual: 0,
         completion: 0,
         subtasks: []},
        {description: "Test task2",
         estimate: 2,
         actual: 1,
         completion: 50.0,
         subtasks: [
            {description: "Task2 - subtask 1",
             estimate: 1,
             actual: 1,
             completion: 100.0},
            {description: "Task2 - subtask 2",
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
  // handleAddNote(noteValue) {
  //   base.post(this.username(), {
  //     data: this.state.notes.concat([noteValue])
  //   });
  // }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    )
  }
};

TasksRepo.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default TasksRepo;
