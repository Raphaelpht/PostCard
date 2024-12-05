import styles from './styled.module.css';
import circuloColorido from 'assets/circulo_colorido.png'

function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Hello World &#x1F30E;</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal!</p>
                <p className={styles.paragrafo}>Eu sou Raphael Mariano, Desenvolvedor Full Stack.</p>
                <p className={styles.paragrafo}>Aqui compartilho alguns posts com conhecimentos de tecnologia e linguagens com qual já tive experiência.</p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt=''/>
                <img className={styles.minhaFoto} src='https://github.com/Raphaelpht.png' alt=''/>
            </div>
        </div>
    )
}

export default Banner