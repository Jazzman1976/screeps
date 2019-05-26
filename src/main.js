
import CreepBase from './Classes/Creeps/_CreepBase';
import CreepWorker from './Classes/Creeps/CreepWorker';

module.exports.loop = function() {
    console.log('tick: ' + Game.time);  
    
    const myCreep = new CreepBase('myCreep','Test-Creep');
    console.log(myCreep.toString());

    const workerCreep = new CreepWorker('myWorker');
    console.log(workerCreep.toString());
    workerCreep.doWork();
}
