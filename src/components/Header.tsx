import  styles  from './Header.module.css'
import chllangeLogo from '../assets/challange.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={chllangeLogo} alt="Logotipo do desafio" />
        </header>
    )
}