
import ProfileProblems from './ProfileProblems'
import ProfileDashboard from './ProfileDashboard'
import { Row, Col, Container } from 'react-bootstrap'

function Profile(props) {

    return (
        <Container fluid="md">
            <Row>
                <Col sm={8}><h3> Welcome, {props.user.firstName}</h3></Col>
            </Row>
            <Row>
                <Col>   </Col>
            </Row>
            <Row >
                <Col sm={6} md={6} lg={6} xs={5}><ProfileProblems user={props.user}/></Col>
                <Col md={{span:4, offset:2}} sm={{span:4, offset:1}} xs={{span:4, offset:0}} ><ProfileDashboard user={props.user}/></Col>
            </Row>
        </Container>
    )
}

export default Profile