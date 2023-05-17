import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import  styles  from './Task.module.css'
import { TaskDone } from './TaskDone';
import  clipboard  from '../assets/clipboard.svg' 


export function Task() {

    const [taskBox, setTask] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");
    const [concluido, setConcluido] = useState(0)

    const isNewTaskEmpty = taskBox.length === 0;


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        
        setTask((prevState) => [...prevState, newTask]); 
        setNewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteTask(taskToDelete: string, checked:boolean) {
       
        const taskWithoutDeleteOne = taskBox.filter(taskBox => {
            return taskBox !== taskToDelete
        })

        setTask(taskWithoutDeleteOne)
        if(concluido === 0 && checked === false){
            return
        } else{
            setConcluido((prevState) => prevState - 1)
        }
    }

    function concluedTask(check:boolean){
             if(check){
                 setConcluido((prevState) => prevState + 1)
                 }else{
                     setConcluido((prevState) => prevState - 1)
                 }
    }
        
    return (
        <article>
            <div>
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
                type="submit">
                    Criar
                    <PlusCircle  />
            </button>
            </form>
            </div>

            <div className={styles.taskValue}>

            <header>
                <div className={styles.created}>
                    <p> Tarefas criadas <span>{taskBox.length}</span> </p>
                </div>
                <div className={styles.conclued}>
                    <p> Concluídas <span>{concluido}</span> </p>
                </div>
            </header>
    
                <div>
        {
            isNewTaskEmpty ? 
            <div className={styles.empty}>
                <img src={clipboard} alt="Clipboard img of empty content" />
                <div>
                    <p>Você ainda não tem tarefas cadastradas <br/> Crie tarefas e organize seus itens a fazer </p>
                </div>
            </div> :
      taskBox.map((task) => {
        return <TaskDone 
            key={task}
            content={task}
            onDeleteTask={deleteTask}
            onConcluedTask={concluedTask}
        />
    })
    }
                </div>                 
            </div>
            


        </article>
    )
}