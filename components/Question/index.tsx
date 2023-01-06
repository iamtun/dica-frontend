import React from "react"
import ButtonViewReply from "../Button/ButtonViewReply";
import Header, { IHeader } from "./Header"
import ImageQuestion from "./Image";

import styles from "./Question.module.scss";

interface IQuestionItem {
    header: IHeader;
    title: String;
    content: any; // image convert to string
    reply: Number;
    comment: Number;
}

const QuestionItem: React.FC<IQuestionItem> = ({ header, title, content, reply, comment }) => {
    return <div className={styles.container}>
        <Header {...header} />
        <p className={styles.title}>{title}</p>
        <ImageQuestion image={content}/>
        
        <div className={styles.bottom}>
            <ButtonViewReply/>

            {/* icons right */}
            <div>

            </div>
        </div>
    </div>
}

export default QuestionItem