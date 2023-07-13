import { useRouteError } from "react-router-dom";

import styles from './Error404.module.css';

const Error404 = () => {
    const error = useRouteError();

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{error.status} Ops!</h3>
            <p className={styles.description}>{error.data}</p>
        </div>
    );
};

export default Error404;