/**
 * Created by isuhar on 13.04.17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react';
import Row from '../components/row'
import PeopleForm from '../components/peopleForm'

@observer
class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
        this.createPeople = this.createPeople.bind(this);
    }
    createPeople () {
        this.props.store.modalShow = true;
    }
    render () {
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.store.people.map((man, i) => {
                            return (
                                <Row key={i} store={this.props.store} number={i}/>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary btn-md"
                onClick={(e) => {this.createPeople()}}>
                    Create
                </button>
                <PeopleForm store={this.props.store}/>
            </div>
        )
    }
}

export default App;