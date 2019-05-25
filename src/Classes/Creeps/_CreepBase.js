export default class CreepBase {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    toString() {
        return 'creep "' + this.name + '" (' + this.role + ')';
    }
}