import { useNavigate } from 'react-router-dom';
import ProjectForm from '../layout/project/ProjectForm';
import styles from './Newproject.module.css';
function Newproject() {

    const navigate = useNavigate();

    function createPost(project) {
        //Initialize cost and services
        project.cost = 0;
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((res => res.json))
            .then((data) => {
                navigate('/projects', { state: { message: "Proyecto Creado" } });
            })
            .catch((error) => console.error(error));

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Crear Proyecto</h1>
            <p>Crea su proyecto para despues agregar los servicios</p>
            <ProjectForm handleSubmit={createPost} btnText="Crear proyecto" />
        </div>

    )
}

export default Newproject;