import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import  styles  from './Task.module.css'
import { TaskDone } from './TaskDone';


export function Task() {

    const [taskBox, setTask] = useState(['']);
    const [newTask, setNewTask] = useState('');

    const isNewTaskEmpty = taskBox.length === 0;


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        
        setTask([...taskBox, newTask]); 
        setNewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteTask(taskToDelete: string) {
        const taskWithoutDeleteOne = taskBox.filter(taskBox => {
            return taskBox !== taskToDelete
        })

        setTask(taskWithoutDeleteOne)
    }
    
     
    return (
        <article>
            <form 
        className={styles.newTask} 
        onSubmit={handleCreateNewTask} >

            <textarea 
                name='taskValue'
                placeholder='Adicione uma nova tarefa' 
                value={newTask}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />

            <button 
                disabled={isNewTaskEmpty}
                type="submit">
                    Criar
                    <PlusCircle  />
            </button>
            </form>

            <div className={styles.taskValue}>
                {taskBox.map(taskValue => {
                    return (
                        <TaskDone 
                            key={taskValue}
                            content={taskValue}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </div>

        </article>
    )
}