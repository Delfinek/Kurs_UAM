(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		var listenerInContext, me = this;
		if (!me.listeners[eventName]) {
			me.listeners[eventName] = [];
		}
		listenerInContext = {
			listener: listener,
			context: context || window
		};

		me.listeners[eventName].push(listenerInContext);

// usuwanie
		return function () {
			var ind = me.listeners[eventName].indexOf(listenerData);
			if (ind > -1) {
				me.listeners[eventName].splice(ind, 1);
			}
		};
	};

	EE.prototype.emit = function (eventName) {
		var argumenty, listeners = this.listeners[eventName] || [];
		argumenty = Array.prototype.slice.call(arguments, 1);
		listeners.forEach(function (listenersData) {
			listenersData.listener.apply(listenersData.context, argumenty);
		});
	};






//var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
