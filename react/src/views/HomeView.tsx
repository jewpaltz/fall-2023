
import { KeyboardEvent } from 'react';
import { useState } from 'react';

export default function HomeView() {

  const [tasks, setTasks] = useState([] as { id?: number, text: string, completed: boolean }[] );

  const tabList = ['Current', 'Completed', 'All'];
  const [tabState, setTabState] = useState('Current');

  function addTask(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == 'Enter') {
      const value = e.currentTarget.value;
      setTasks([ { text: value, completed: false }, ...tasks]); // add new task to the beginning of the list
      e.currentTarget.value = '';
    }
  }

  function toggleTask(index: number) {
    setTasks(tasks.map((t, i) => i == index ? { ...t, completed: !t.completed } : t));
  }

  const shouldDisplay = (task: { id?: number, text: string, completed: boolean }) =>
    (tabState == 'Current' && !task.completed) ||
    (tabState == 'Completed' && task.completed) ||
    tabState == 'All';

return (
  <main className="columns is-multiline is-centered">
    <div className="column is-full">
      <h1 className="title" >Home</h1>
      <h2 className="subtitle">
        Welcome to your Vue.js + TypeScript app
      </h2>
    </div>

    <div className="column is-half-desktop is-centered">
      <div className="panel is-primary">
        <p className="panel-heading">
          To Do
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder="What do you want to do" onKeyDown={addTask}  />
            <span className="icon is-left">
              <i className="fas fa-plus" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          {tabList.map(tab => <a className={ tabState == tab ? 'is-active' : '' } onClick={()=> setTabState(tab)}>{ tab }</a>)}
        </p>
        {tasks.map((task, i) => shouldDisplay(task) && <label className="panel-block" >
            <input type="checkbox" checked={task.completed} onChange={()=> toggleTask(i)} />
            { task.text }
          </label>)}
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            Reset all filters
          </button>
        </div>
      </div>

    </div>
  </main>
  )
}