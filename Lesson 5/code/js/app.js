window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded


	var store = new UAM.Store();

	var inputView = new UAM.inputView(document.querySelector('#inputView'));
	var listView = new UAM.listView(document.querySelector('#listView'));
	var footerView = new UAM.footerView(document.querySelector('#footerView'));
	

	var inputCtrl = new UAM.inputCtrl(inputView, store);
	var listCtrl = new UAM.listCtrl(listView, store);
	var footerCtrl = new UAM.footerCtrl(footerView, store);
});
