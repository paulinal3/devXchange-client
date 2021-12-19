import apiUrl from "../apiConfig"
import axios from "axios"

export const getProbAnswers = (problemId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/${problemId}/answers`
    })
}

export const postAnswer = (user, problemId, value) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/${problemId}/answers`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            answer: {
                solution: value
            }
        }
    })
}

export const updateAnswer = (user, answerId, changeAnswer) => {
    console.log('this is user', user)
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/answers/${answerId}`,
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {
            answer: {
                solution: changeAnswer
            }
        }
    })
}