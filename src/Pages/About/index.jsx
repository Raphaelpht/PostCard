import ModelPost from "Components/ModelPost"
import styles from './styled.module.css'
import Capa from "assets/sobre_mim_capa.png"

function About() {
    return (
        <ModelPost fotoCapa={Capa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Raphael!</h3>
            <img className={styles.fotoSobreMim} src='https://github.com/Raphaelpht.png' alt="" />
            <p className={styles.paragrafo}>
                Olá, tudo bem?
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na Escola Técnica Estadual de Cotia (ETEC), quando fiz o curso de Redes de Computadores. 
                Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, mas sem aprofundar muito em cada uma delas. 
            </p>
            <p className={styles.paragrafo}>
                Na época escolhi o curso por ser o mais próximo de computação que a instituição oferecia.
                O curso era mais voltado a area de infraestrutura, como instalação de roteadores e crimpagem de cabos, então decidi conciliar
                oque aprendia na aula de lógica com alguns cursos na área de programação, aprendendo por conta própria.
            </p>
            <p className={styles.paragrafo}>
                No projeto final, resolvi criar um site, utilizando PHP, JS e C++ para Arduino para realizar o controle de acesso da instituição, 
                que era feito com uma carteirinha de papel. Como ainda não tinha muito conhecimento com as linguagens. Foi um projeto bem simples,
                mas que me deu a oportunidade de aplicar o conhecimento que havia adquirido.
            </p>
        </ModelPost>
    )
}

export default About