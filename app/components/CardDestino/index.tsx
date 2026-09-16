import { Viagem } from "@/types/types"
import styles from "./CardDestino.module.css";

type Props = {
    viagem: Viagem
}

const Card = ({viagem}: Props) => {
    const {title, imagem, description} = viagem;
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img className={styles.imagem} src={imagem} alt={`Foto da viagem ${title}`} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.titulo}>{title}</h3>
                <p className={styles.descricao}>{description}</p>
            </div>
        </div>
    )
}

export default Card;
