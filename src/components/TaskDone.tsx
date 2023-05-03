import styles from './TaskDone.module.css'
import deafultkLogo from '../assets/check.svg'
import trueLogo from '../assets/true.svg'
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
                   <div className={styles.defaultImg}>
                        <img src={deafultkLogo} alt="Logo default" />
                   </div>
                   
                    <div className={styles.trueImg}>
                        <img src={trueLogo}/>
                    </div>
                    
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio facilis libero deleniti id quo animi explicabo nostrum repudiandae voluptates.</p>

                        <button>
                            <Trash size={20} />
                        </button>
                                            
                </div>
            </div>
        </div>
    )
}

