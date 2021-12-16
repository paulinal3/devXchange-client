import apiUrl from "../apiConfig"
import axios from "axios"

export const getProbAnswers = (problemId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/${problemId}/answers`
    })
}

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