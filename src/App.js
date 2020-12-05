
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/auth/register'
import Login from './components/auth/login'
import PrivateRoute from './privateRoute'
import Homepage from './components/home/homepage'
import Profile from './components/profile/profile'
import YourStories from './components/stories/yourStories'
import description from './components/stories/descriptionPage'
import editor from './components/stories/editorPage'
const App = () => {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Homepage} />
          <PrivateRoute path="/yourStories" component={YourStories} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/description" component={description} />
          <PrivateRoute path="/editor" component={editor} />
      </Router>
    </div>
  );
}

export default App;
