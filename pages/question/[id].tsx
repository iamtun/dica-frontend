import React from "react"
import Header from "../../components/Question/Header";

import Avatar from "../../assets/images/avatar.png";

const question = {
    name: "GR Học tập",
    author: "LooBoo",
    tag: "#Vật lý - 9",
    avatar: Avatar,
    timeAgo: "2 giờ trước",
}

const QuestionDetail: React.FC = () => {
    return <div className="container">
        <Header name={question.name} author={question.author} tag={question.tag} avatar={question.avatar} timeAgo={question.timeAgo} />
    </div>
}

export default QuestionDetail;