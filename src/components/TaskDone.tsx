import styles from './TaskDone.module.css'
import deafultkLogo from '../assets/check.svg'
import trueLogo from '../assets/true.svg'
import { Trash } from 'phosphor-react'
import { useState } from 'react';
interface TaskDoneProps {
    content: string;
    onDeleteTask: (task: string, checked: boolean) => void
    onConcluedTask: (check: boolean) => void
}

export function TaskDone({content, onDeleteTask, onConcluedTask}: TaskDoneProps) {
    const [checked, setChecked] = useState(false)

    function handleDeleteTask() {
        onDeleteTask(content, checked);
    }
    
    function handleConcluedTask() {
        setChecked(!checked)
        onConcluedTask(!checked)  
    }

    return (
        <div className={styles.taskDone}>
            <div>              
                <div className={styles.commentTask}>
                    {
                        checked ? 
                        <div 
                        className={styles.divImg}
                        id="divImg" 
                        onClick={handleConcluedTask}
                         >
                            <img 
                                src={trueLogo} 
                                alt='Logo On'/>
                    </div> : ( <>
                            <div
                                className={styles.defaultImg} >
                                    <img src={deafultkLogo} alt='Logo deafult' />
                           </div>              
                            <div
                                id="divImg" 
                                onClick={handleConcluedTask}
                                className={styles.trueImg} >
                                    <img 
                                        src={trueLogo} 
                                        alt='Logo On'/>
                            </div></>)
                    }
                   

                    <div > 
                        {
                            checked ?
                                 <p className={styles.inline}>{content}</p> :
                                 <p>{content}</p>
                        }
                    </div>

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

