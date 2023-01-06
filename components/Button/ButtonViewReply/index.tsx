import React from "react"
import styles from "./ButtonViewReply.module.scss";

const ButtonViewReply: React.FC = () => {
    return <div className={styles.container}>
        <div className={styles.count}>
            <p>2</p>
        </div>
        <p className={styles.text}>Xem câu trả lời</p>
    </div>
}

export default ButtonViewReply