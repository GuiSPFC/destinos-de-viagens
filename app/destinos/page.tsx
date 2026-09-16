import Title from "../components/Title";
import Grid from "../components/Grid";
import { viagens } from "@/lib/viagens";
import styles from "./Destinos.module.css"

const Destinos = () => {
    return(
        <>
            <h1 className={styles.titulo}>Destinos</h1>
            <Grid viagens={viagens}/>
        </>
    )
}

export default Destinos;