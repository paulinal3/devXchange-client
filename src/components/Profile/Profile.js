import { Row, Col, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import ProfileProblems from './ProfileProblems'
import ProfileDashboard from './ProfileDashboard'
import ProfileProblemsList from './ProfileProblemsList'
import { getUsersProblems } from '../../api/problems'

export default function Profile(props) {

    const [userProblems, setUserProblems] = useState([])

    useEffect(() => {
        getUsersProblems(props.user)
            .then(problems => {
                console.log(`these are all the current user's problem\n`, problems.data.foundProblems)
                setUserProblems(problems.data.foundProblems)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div class='container-fluid bg-dark text-light p-5'>
                <h1 class='mb-3' className='name'>Welcome, {props.user.firstName}</h1>
            </div>
            <Container fluid="md">
                <Row>
                    <Col></Col>
                </Row>
                <Row >
                    <Col sm={6} md={6} lg={6} xs={5}>
                        <ProfileProblems user={props.user} userProblems={userProblems} />
                    </Col>
                    <Col md={{ span: 4, offset: 2 }} sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 0 }} >
                        <ProfileDashboard user={props.user} />
                        <ProfileProblemsList userProblems={userProblems} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
