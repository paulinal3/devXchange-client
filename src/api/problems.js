import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProblems = () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/problems',
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


// export const getOneProblem = (userToken, problemId) => {
//     return axios({
//         method: 'GET',
//         Authorization: 'Bearer ' + userToken, 
//         url: apiUrl + '/problems/' + problemId
//     })
// }