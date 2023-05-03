import { PlusCircle } from 'phosphor-react'
import  styles  from './Task.module.css'


export function Task() {
    return (
        <div className={styles.newTask}>
            <input placeholder='Adicione uma nova tarefa' type="text" />

            <button
             type='submit'>
                 Criar
                 <PlusCircle  />
            </button>
        </div>
    )
}