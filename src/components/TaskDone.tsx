import styles from './TaskDone.module.css'
import deafultkLogo from '../assets/check.svg'
import trueLogo from '../assets/true.svg'
import { Trash } from 'phosphor-react'
import { useState } from 'react';

interface TaskDoneProps {
    content: string;
    onDeleteTask: (task: string) => void
}

export function TaskDone({content, onDeleteTask}: TaskDoneProps) {
    const [countTasks, setCountTasks] = useState(0)
    const [countConcluedTask, setConcluedTask] = useState(0)

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function countTask() {
        setCountTasks((state) => {
            return state + 1
        });
    }

    function countConcluedTasks() {
        setConcluedTask((state) => {
            return state + 1
        });
    }


    return (
        <div className={styles.taskDone}>
            <header>
                <div className={styles.created}>
                    <p>Tarefas criadas <span>{countTasks}</span> </p>
                     

                </div>
                <div className={styles.conclued}>
                    <p>Concluídas  <span>{countConcluedTask}</span> </p>
                </div>
            </header>

            <div>
                <div className={styles.commentTask}>
                   <div 
                        className={styles.defaultImg}>
                            <img src={deafultkLogo} alt='Logo deafult' />
                   </div>              
                    <div 
                        className={styles.trueImg}>
                            <img src={trueLogo} alt='Logo On'/>
                    </div>        
                        <p>{content}</p>

                    <button 
                        onClick={handleDeleteTask}
                        title='Deletar Task'>
                            <Trash size={20} />
                    </button>     
                </div>
            </div>
        </div>
    )
}

