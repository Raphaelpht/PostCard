import styles from './styled.module.css';

function Button({children, tamanho}) {
    return (
        <button className={`${styles.botao} ${styles[tamanho]}`}>
            {children}
        </button>
    )
}

export default Button