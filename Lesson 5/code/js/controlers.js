(function (global){

var inputCtrl;
var listCtrl;
var footerCtrl;

UAM.inputCtrl = function(inputView, store){
	inputView.on('addButtonClicked',function(text){
		store.add(text);
	console.log("I've just add "+ text);
	})
}

UAM.listCtrl = function(listView, store){
	listView.on('listItemClicked', function(text){
		console.log("I'm controler, I think it was clicked: " + text);
		store.changeStatus(text);
	})
	store.on("changedStatus", function(text, status, active){
		listView.changeStatus(text, status);
	})
	store.on('addedTask',function(text, status, len){ //trzeba przekazać kontekst
		listView.addItem(text, status);
	})
}

UAM.footerCtrl = function(footerView, store){
	store.on('changedStatus', function(text, status, active){
		footerView.setActiveCount(active);
	})
	store.on('addedTask', function(text, status, len){
		footerView.setCount(len);
	})
	
}
}(window));
