import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react"
import QuestionItem from "@/components/Question";

const QuestionDetail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ question }) => {
    return <div className="container">
        <QuestionItem {...question} />
    </div>
}


export const getServerSideProps: GetServerSideProps = async () => {
    const question = {
        header: {
            name: "Cộng đồng vật lý Dicamon",
            author: "LooBoo",
            tag: "#Vật lý - 9",
            timeAgo: "2 giờ trước",
        },
        title : "Các bạn giúp mình giải bài này với ạ",
        content: "https://docdn.giainhanh.io/media/attachments/2023/01/06/442023579324777297.jpeg",
        comment: 14,
    }

    return {
        props: {
            question
        }
    }
}
export default QuestionDetail;