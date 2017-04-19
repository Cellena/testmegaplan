/**
 * Created by isuhar on 13.04.17.
 */
import React from 'react'
import {observer} from 'mobx-react';
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'

@observer
export default class extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
        this.createPeople = this.createPeople.bind(this);
        this.close = this.close.bind(this);
    }
    createPeople () {

    }
    close () {
        this.props.store.modalShow = false;
        this.props.store.updateMan = null;
    }
    onChangeValue (id, value) {
        switch (id) {
            case 'formInlineFirstName': this.props.store.updateMan.name.first = value; break;
            case 'formInlineLastName': this.props.store.updateMan.name.last = value; break;
            case 'formInlineAge': this.props.store.updateMan.age = value; break;
        }
    }
    render () {
        let man = this.props.store.updateMan;
        return(
            <Modal show={this.props.store.modalShow} onHide={this.close}>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="formInlineFirstName">
                            <Col componentClass={ControlLabel} sm={2}>
                                First Name
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="First Name"
                                             onChange={(e) => {this.onChangeValue(e.target.id, e.target.value)}}
                                             value={man != null ? man.name.first : ''} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formInlineLastName">
                            <Col componentClass={ControlLabel} sm={2}>
                                Last Name
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Last Name"
                                             onChange={(e) => {this.onChangeValue(e.target.id, e.target.value)}}
                                             value={man != null ? man.name.last : ''} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formInlineAge">
                            <Col componentClass={ControlLabel} sm={2}>
                                Age
                            </Col>
                            <Col sm={10}>
                                <FormControl type="number" placeholder="Age"
                                             onChange={(e) => {this.onChangeValue(e.target.id, e.target.value)}}
                                             value={man != null ? man.age : ''} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit">
                                    Create
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}