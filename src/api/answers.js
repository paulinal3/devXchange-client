import apiUrl from "../apiConfig"
import axios from "axios"

export const postAnswer = (user, problemId, newSolution) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/${problemId}/answers`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            answer: {
                solution: newSolution.solution
            }
        }
    })
}