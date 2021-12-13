import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProblems = (problems) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/problems',
		data: {
			problems: {
                title: problems.title,
                description: problems.description,
                solved: problems.solved,
                img: problems.img
			},
		},
	})
}

