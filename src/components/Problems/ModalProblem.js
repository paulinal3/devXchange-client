import { Modal, Button, InputGroup } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'

// console.log('A:', user)
// console.log('B:', currentProblem)

export default function ModalProblem(props) {
    
    // console.log('USER:', props.user)
    return (
        <>
            {!props.currentProblem ? <h1>Loading...</h1> : (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {props.currentProblem.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <h4>Centered Modal</h4> */}
                        <p>
                            {props.currentProblem.description}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <>
                            {props.user && props.user._id == props.currentProblem.owner._id ?
                                <>
                                    <Button onClick={props.onHide}>Close</Button>
                                </> :
                                <>
                                    <Link to={`/problems/${props.currentProblem._id}`}
                                        currProblem={props.currentProblem}><Button onClick={props.onHide}>Answer Problem</Button></Link> 
                                </>
                            }
                        </>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    )
}
