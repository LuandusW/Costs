import ProjectForm from '../layout/project/ProjectForm';
import styles from './Newproject.module.css';
function Newproject(){
    return(

        <div className={styles.newproject_container}>
            <h1>Crear Proyecto</h1>
            <p>Crea su proyecto para despues agregar los servicios</p>
            <ProjectForm btnText="Crear proyecto"/>
        </div>

    )
}

export default Newproject;