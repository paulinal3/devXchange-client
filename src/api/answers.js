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

export const updateAnswer = (user, answerId, changeAnswer) => {
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/answers/${answerId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            answer: {
                solution: changeAnswer.solution
            }
        }
    })
}

export const destroyAnswer = (user, answerId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/answers/${answerId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}