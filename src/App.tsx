import { Header } from './components/Header'
import { Task } from './components/Task'

import  styles  from './App.module.css'
import { TaskDone } from './components/TaskDone'


export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <div>
          <Task />
        </div>
        <div>
          <TaskDone />
        </div>
      </main>
    </div>
  )
}


