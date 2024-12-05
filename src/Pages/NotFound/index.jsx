import Button from 'Components/Button'
import styles from './styled.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'


function NotFound() {
    const navegate = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
                <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial</p>

                <div className={styles.botaoContainer} onClick={() => navegate(-1)}>
                    <Button tamanho="lg">Voltar</Button>
                </div>

                <img className={styles.imagemCachorro} src={erro404} alt=''/>
            </div>

            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NotFound