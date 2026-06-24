import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Load from "../layout/load";
import Container from "../layout/Container";
import styles from "./Project.module.css";
import ProjectForm from "../layout/project/ProjectForm";
import Message from "../layout/Message";


function Project() {

    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`)
                .then(res => res.json())
                .then(data => {
                    setProject(data);
                });
        }, 1000);

    }, [id]);

    function editPost(project) {

        if (project.budget < project.cost) {
            setMessage("Precio menor que el custo del proyecto.");
            setType("error");
            return false;

        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then(res => res.json())
            .then((data) => {
                setProject(data);
                setShowProjectForm(false);
                setMessage("Proyecto actualizado.");
                setType("sucess");
            })
            .catch(error => console.log(error))


    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <>
            {project.name ?
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && (
                            <Message type={type} msg={message} />
                        )}

                        <div className={styles.details_container}>
                            <h1>Proyecto: {project.name} </h1>
                            <button className={styles.btn} onClick={toggleProjectForm} >
                                {!showProjectForm ? 'Editar Proyecto' : 'Cerrar Proyecto'}

                            </button>

                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Cateogira:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total Precio:</span> {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> {project.cost}
                                    </p>
                                </div>

                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Editar"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>

                : (
                    <Load />
                )}
        </>
    )
}
export default Project;