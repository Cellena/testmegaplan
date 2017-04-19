/**
 * Created by isuhar on 13.04.17.
 */
import React from 'react'
import {observer} from 'mobx-react';

@observer
export default class extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
        this.editPeople = this.editPeople.bind(this);
    }
    editPeople () {
        this.props.store.updateMan = this.props.store.people[this.props.number];
        this.props.store.modalShow = true;
    }
    render () {
        let man = this.props.store.people[this.props.number];
        return(
            <tr>
                <td>{this.props.number + 1}</td>
                <td>{man.name.first}</td>
                <td>{man.name.last}</td>
                <td>{man.age}</td>
                <td>
                    <button type="button" className="btn btn-primary btn-md"
                            onClick={(e) => {this.editPeople()}}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger btn-md"
                            onClick={(e) => {this.props.store.delete(this.props.number)}}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}