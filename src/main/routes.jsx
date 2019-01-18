import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

// import Todo from '../todo/todo';
// import About from '../about/about';
import Tarefas from '../form/tarefas';
import EditForm from '../form/editForm';

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefa' component={Tarefas} />
        <Route path='/edit' component={EditForm}  />

        {/* <Route path="/edit" render={()=><EditForm tarefa={Tarefas} />}/> */}
        <Redirect from='*' to="/tarefa" />
    </Router>
)