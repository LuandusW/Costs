import styles from './Home.module.css';
import saving from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
function Home() {

    return (
        <section className={styles.home_container}>
            <h1>Bienvenido a <span>Costs</span></h1>
            <p>Empiece a gestionar sus proyectos ahora mismo!</p>
            <LinkButton to="/Newproject" text="Criar proyecto"/>
            <img src={saving} alt='costs'/>
        </section>

    )
}

export default Home;