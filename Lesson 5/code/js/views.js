(function (global){

var inputView;
var listView;
var footerView;

if (!global.UAM) {
		global.UAM = {};
	}

UAM.inputView = function(content){
	UAM.EventEmitter.call(this);


	this.addButton = content.querySelector('#add_button');
	this.input = content.querySelector('#new_element');

	this.add = function(){	
		task_text = this.input.value;
			if (task_text){
				this.emit("addButtonClicked", task_text);
			}
	}
	this.addButton.addEventListener('click',this.add.bind(this))
}

UAM.utils.inherits(UAM.EventEmitter, UAM.inputView);




UAM.listView = function(content){
	UAM.EventEmitter.call(this);
	this.ListElements = [];
	mainList = content;
	
	this.addItem = function(text, status){
		var entry = document.createElement('div');
		entry.appendChild(document.createTextNode(text));
		mainList.appendChild(entry);
		this.ListElements[text] = entry; //? czym jest wskaźnik na węzeł? Kuuuuuba?
		adding = function(){
			this.emit("listItemClicked", text);
			console.log(text + "I was clicked");
		}
		entry.addEventListener('click', adding.bind(this));
	}

	this.changeStatus = function(text, status){
		//function, which changes status
		element = this.ListElements[text];
		if (status){
			element.setAttribute('class', "active_element");
		}
		else{
			element.setAttribute('class', "");
		}
		
	}


}

UAM.utils.inherits(UAM.EventEmitter, UAM.listView);

UAM.footerView = function (content) {
	UAM.EventEmitter.call(this);
	this.content = content;

	this.setCount = function(count) {
    this.content.querySelector('#todo_all').textContent = "Liczba wszystkich tasków: " + count;
	};

	this.setActiveCount = function(count) {
    this.content.querySelector('#todo_active').textContent = "Liczba aktywnych tasków: " + count;
	};

}

UAM.utils.inherits(UAM.EventEmitter, UAM.footerView);

}(window))