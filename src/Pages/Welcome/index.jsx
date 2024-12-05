import styles from './styled.module.css';
import posts from 'json/posts.json'
import PostCard from "Components/PostCard";

function Welcome() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Welcome