import styles from './styled.module.css';
import LinkMenu from '../LinkMenu';

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <LinkMenu title='Início' destination='/'/>
                <LinkMenu title='Sobre Mim' destination='/about'/>
            </nav>
        </header>
    )
}

export default Menu