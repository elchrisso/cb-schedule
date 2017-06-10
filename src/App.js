import React, { Component } from 'react';
import './App.css';
import moment from 'moment'

class App extends Component {
  constructor () {
    super()
    this.state = {
      weekStart: moment('06-11-2017'),
      weekEnd: moment('06-17-2017'),
      tasks: [
        {
          objType: 'Task',
          ID: '1',
          name: 'Task One',
          startDate: '06-11-2017',
          endDate: '06-16-2017',
          projectID: '1',
          assignments: [ '1', '2' ]
        },
        {
          objType: 'Task',
          ID: '2',
          name: 'Task Dos',
          startDate: '06-13-2017',
          endDate: '06-16-2017' ,
          projectID: '2',
          assignments: [ '3', '4' ],
          complete: true,
        },
        {
          objType: 'Task',
          ID: '3',
          name: 'Another Task',
          startDate: '06-17-2017',
          endDate: '06-17-2017',
          projectID: '1' ,
          assignments: [ '5' ]
        }
      ]
    }
  }

  render() {

    const tasks = this.state.tasks.map((task) => {
      const daySpan = moment(task.endDate).diff(moment(task.startDate), 'days') + 1
      const offset = moment(task.startDate).diff(this.state.weekStart, 'days')
      return (
        <div key={task.ID} className={`col-${daySpan} offset-${offset} bg-primary`}>
          {task.name}
        </div>
      )
    })

    return (
      <div className="container">
        <header className="row">
          <div className="col">
            <p>SUN</p>
            1
          </div>
          <div className="col">
            <p>MON</p>
            2
          </div>
          <div className="col">
            <p>TUE</p>
            3
          </div>
          <div className="col">
            <p>WED</p>
            4
          </div>
          <div className="col">
            <p>THU</p>
            5
          </div>
          <div className="col">
            <p>FRI</p>
            6
          </div>
          <div className="col">
            <p>SAT</p>
            7
          </div>
        </header>
        <section className="row">
          {tasks}
        </section>
      </div>
    );
  }
}

export default App;
