import React from "react"
import QuestionComment from "./Comment";
import QuestionControl from "./Control";
import Header, { IHeader } from "./Header"
import QuestionImage from "./Image";

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

        <QuestionImage image={content}/>
        
        <QuestionControl/>
        
        <QuestionComment comment={comment} marginTop={24}/>
    </div>
}

export default QuestionItem