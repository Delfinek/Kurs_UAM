(function (global){

var InputCtrl;
var ListCtrl;
var FooterCtrl;


if (!global.UAM) {
		global.UAM = {};
	}


InputCtrl = function(inputView, store){
	inputView.on('addButtonClicked',function(text){
		store.add(text)
	})
}

ListCtrl = function(){
	
}

FooterCtrl = function(){
	
}
}(window));
