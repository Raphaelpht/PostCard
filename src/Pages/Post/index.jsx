import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import ModelPost from "Components/ModelPost"
import NotFound from "Pages/NotFound"
import Standard from "Components/Standard"
import PostCard from "Components/PostCard"
import posts from "json/posts.json"
import styles from './styled.module.css'
import './styled.css'

function Post() {
    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    const recomendPost = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    if (!post) return <NotFound/>

    return (
        <Standard>
            <ModelPost fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar</h2>

                <ul className={styles.postsRecomendados}>
                    {recomendPost.map((post) => {
                        return (
                            <li key={post.id}>
                                <PostCard post={post}/>
                            </li>
                        )
                    })}
                </ul>
            </ModelPost>
        </Standard>
    )
}

export default Post