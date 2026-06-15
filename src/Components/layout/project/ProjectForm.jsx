import styles from './ProjectForm.module.css';
function ProjectForm() {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Ingrese el proyecto" />
            <input type="number" placeholder="Precio del proyecto" />
            <select name="category_id">
                <option disabled selected>Seleccione la categoría</option>
            </select>
            <input type="submit" value="Crear Proyecto" />
        </form>
    )
}

export default ProjectForm;
