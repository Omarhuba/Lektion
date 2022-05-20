import { Link } from 'react-router-dom'
import style from '../../module/index.module.scss'

const Navigation = () => {
    return ( <div className={style.Navigation}>
        <Link to="/">Home</Link>|
        <Link to="/Bootcamp">Bootcamp</Link>|
        <Link to="/About">About</Link>|
        <Link to="/Contact">Contact</Link>

    </div> );
}

export default Navigation;