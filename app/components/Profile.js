import React       from 'react';
import Repos       from './github/Repos.js';
import UserProfile from './github/UserProfile.js';
import Notes       from './notes/Notes.js';
import helpers     from '../utils/Helpers';
import Rebase      from 're-base';

var base = Rebase.createClass('https://flickering-inferno-6208.firebaseio.com');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  username() {
    return this.context.router.getCurrentParams().username;
  }
  init() {
    this.ref = base.bindToState(this.username(), {
      context: this,
      asArray: true,
      state: 'notes'
    });
    helpers.getGithubInfo(this.username())
      .then((dataObject) => {
        this.setState({
          bio: dataObject.bio,
          repos: dataObject.repos
        });
      });
  }
  componentDidMount() {
    this.init()
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  componentWillMount() {
    this.router = this.context.router;
  }
  componentWillReceiveProps() {
    base.removeBinding(this.ref);
    this.init();
  }
  handleAddNote(noteValue) {
    base.post(this.username(), {
      data: this.state.notes.concat([noteValue])
    });
  }
  render() {
    var username = this.username();
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes username={username} 
                 notes={this.state.notes}
                 add_note_fun={this.handleAddNote.bind(this)} />
        </div>
      </div>
    )
  }
};

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Profile;