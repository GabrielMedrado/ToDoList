import styles from './TaskDone.module.css'
import checkLogo from '../assets/check.svg'
import { Trash } from 'phosphor-react'


export function TaskDone() {
    return (
        <div className={styles.taskDone}>
            <header>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                </div>
                <div className={styles.conclued}>
                    <p>Concluídas</p>
                </div>
            </header>
            <div>
                <div className={styles.commentTask}>
                    <img src={checkLogo} alt="Logo do Check" />
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio facilis libero deleniti id quo animi explicabo nostrum repudiandae voluptates.</p>

                        <span className={styles.trash}>
                            <Trash size={20} />
                        </span>
                                            
                </div>
            </div>
        </div>
    )
}

