import styles from "./Title.module.css";

const Title = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>As melhores viagens para realizar</h2>
            <p className={styles.descricao}>
                Descubra as melhores dicas de viagens e roteiros práticos. 
                Planeje suas férias, economize na compra de passagens e encontre os melhores destinos no Brasil e no mundo.
                Acesse e viaje melhor.
            </p>
        </div>
    );
}

export default Title;
