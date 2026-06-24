import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../layout/project/ProjectCard';
import Load from '../layout/load';


function Project() {
    const [projects, setProjects] = useState([]);
    const [removeLoad, setRemoveLoad] = useState(false);
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects").
                then(res => res.json())
                .then((data) => {
                    setProjects(data);
                    setRemoveLoad(true);
                }).catch((err) => console.error(err));
        }, 2000)
    }, []);



    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Mis Proyectos</h1>
                <LinkButton to="/newproject" text="Criar Proyecto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard id={project.id} key={project.id} name={project.name} budget={project.budget} category={project.category.name} />
                ))}
                {!removeLoad && <Load />}
                {removeLoad && projects.length === 0 &&(
                    <p>No hay proyectos </p>
                )
                
                }
            </Container>
        </div>

    )
}

export default Project;