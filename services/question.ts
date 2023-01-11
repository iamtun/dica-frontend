import request from "utils/request";

export const findQuestionById = (url:string) => {
    return request.get(url);
}