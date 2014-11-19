UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.toDoList  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

function Task(el_text, el_status){
	this.text = el_text;
	this.status = el_status || false;
	return this;
}



UAM.Store.prototype.add = function (el_text, el_status) {
	this.toDoList.push(Task(el_text, el_status)); //zrobić osobny obiekt "Task"
};
UAM.Store.prototype.update = function (el_text) {
	this.toDoList[indexOf].text = el_text; 
	this.toDoList[indexOf].status = !this.toDoList[indexOf].status;

};
