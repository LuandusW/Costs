import loading from '../../img/loading.svg';
import styles from './Load.module.css';
function Load() {

    return (

        <div className={styles.load_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>

    )
}

export default Load;