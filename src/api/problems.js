import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProblems = () => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/problems`,
    })
}

export const getOneProblem = (problemId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/problems/${problemId}`
    })
}

export const postProblem = (user, newProblem) => {

    return axios({
        method: 'POST',
        url: apiUrl + '/problems',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: {
            problem: {
                title: newProblem.title,
                description: newProblem.description,
                img: newProblem.img
            },
        },
    })
}

export const destroyProblem = (user, itemId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/problems/${itemId}`,
        headers: { Authorization: `Token token=${user.token}`, },
    })
}

export const updateProblem = (user, problemId, changeProblem) => {
    console.log('THIS IS PROBLEM ID:', problemId)
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/problems/${problemId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: {
            problem: {
                description: changeProblem.description,
                img: changeProblem.img
            }
        }
    })
}
