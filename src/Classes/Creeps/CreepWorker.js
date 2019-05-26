import CreepBase from './_CreepBase';

export default class CreepWorker extends CreepBase {
    constructor (name, role = 'harvester') {
        super(name, role);
    }

    doWork() {
        if (this.role == 'harvester') {
            console.log(this.name +' is harvesting.');
        }
    }
}