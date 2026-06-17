import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';

function Project() {

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Mis Proyectos</h1>
                <LinkButton to="/newproject" text="Criar Proyecto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                <p>Proyectos...</p>
            </Container>
        </div>

    )
}

export default Project;