import { NavLink } from 'react-router-dom';
import styles from './styled.module.css';

function LinkMenu({title, destination}) {
    return (
        <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.linkRef : ""}`} to={destination}>
            {title}
        </NavLink>
    )
}

export default LinkMenu