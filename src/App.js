import React, { Component } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Posts from './components/posts';
import Footer from './components/footer';
import Contacts from './components/contact';
import About from './components/about';
import Skills from './components/skills';
import Courses from './components/courses';
import Education from './components/education';

class App extends Component {
  render() {
    return (
      <div className='container-fluid ltr'>
        <Navbar />

        <div className='row'>
          <Sidebar />
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
            <Switch>
              <Route path='/contact' component={Contacts} />
              <Route path='/about' component={About} />
              <Route path='/skills' component={Skills} />
              <Route path='/courses' component={Courses} />
              <Route path='/education' component={Education} />

              <Route path='/' exact component={Posts} />
              <Redirect to='/not-found' />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
