import styles from './styled.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

function Footer() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            Desenvolvido por Alura
        </footer>
    )
}

export default Footer