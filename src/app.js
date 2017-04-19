/**
 * Created by isuhar on 13.04.17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import {create} from 'mobx-persist'
import PeopleStore from '../src/store/people'
import $ from "jquery";

$.getJSON('mates.json', function(mates) {

    const peopleStore = new PeopleStore (mates);
    const hydrate = create({
        storage: window.localStorage,
        jsonify: true
    });
    hydrate('people', peopleStore).then(() => console.log('people hydrated'));

    ReactDOM.render(<App store={peopleStore} />, document.getElementById("root"));
});