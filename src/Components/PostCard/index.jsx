import { Link } from 'react-router-dom'
import styles from './styled.module.css'
import Button from 'Components/Button'

function PostCard({post}) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='Imagem de Capa do post'/>

                <h2 className={styles.titulo}>{post.titulo.substr(0, 55)}</h2>

                <Button>Ler</Button>
            </div>
        </Link>
    )
}

export default PostCard