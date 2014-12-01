UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.toDoList  = [];
	this.active = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

function Task(el_text, el_status){
	this.text = el_text;
	this.status = el_status || false;
	return this;
}



UAM.Store.prototype.add = function (el_text, el_status) {
	var newTask = new Task(el_text, el_status)
	this.toDoList.push(newTask); //zrobić osobny obiekt "Task"
	console.log("store add");
	console.log(newTask.text, newTask.status);
	this.emit("addedTask", newTask.text, newTask.status, this.toDoList.length);
	console.log("store emit");

};

UAM.Store.prototype.changeStatus = function (el_text) {
	for (i in this.toDoList){
		if (this.toDoList[i].text == el_text){
			this.toDoList[i].status = !this.toDoList[i].status;
			if (this.toDoList[i].status){
				this.active++;
			}
			else{
				this.active--;
			}
			this.emit("changedStatus", this.toDoList[i].text, this.toDoList[i].status, this.active);
			console.log("changedStatus", this.toDoList[i].text, this.toDoList[i].status, this.active);
		}
	}
};
