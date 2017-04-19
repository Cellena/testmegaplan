/**
 * Created by isuhar on 13.04.17.
 */
import {observable, action} from 'mobx'
import {persist} from 'mobx-persist'

export default class {

    constructor (people) {
        this.people = people;
    }

    @action
    delete (id) {
        this.people.splice(id, 1);
    }
    @action
    update (id, man) {
        this.people[id] = man;
    }

    @persist('object') @observable people;

    @observable modalShow = false;
    @observable updateMan;
}