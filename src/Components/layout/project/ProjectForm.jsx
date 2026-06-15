import Input from '../../form/Input';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';
import styles from './ProjectForm.module.css';
function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Nombre del proyecto" name="name" placeholder="Ingrese el nombre del proyecto"/>
            <Input type="number" text="Valor del proyecto" name="budget" placeholder="Ingrese el valor del proyecto"/>
            <Select name="category_id" text="Selecciona una categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm;
