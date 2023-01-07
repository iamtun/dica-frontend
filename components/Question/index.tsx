import React from "react"
import QuestionComment from "./Comment";
import QuestionControl from "./Control";
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
        
        <QuestionControl/>
        
        <QuestionComment comment={comment}/>
    </div>
}

export default QuestionItem