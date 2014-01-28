var app = {

	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},

	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.

	bindEvents: function() {

		document.addEventListener('deviceready', this.onDeviceReady, false);

	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'

	// onDeviceReady: function() {
	// 	app.receivedEvent('deviceready');
	// },

	// Update DOM on a Received Event
	// receivedEvent: function(id) {
	// 	var parentElement = document.getElementById(id);
	// 	var listeningElement = parentElement.querySelector('.listening');
	// 	var receivedElement = parentElement.querySelector('.received');

	// 	listeningElement.setAttribute('style', 'display:none;');
	// 	receivedElement.setAttribute('style', 'display:block;');

	// 	console.log('Received Event: ' + id);
	// }

	var pictureSource;   // picture source
	var destinationType; // sets the format of returned value

	// Wait for device API libraries to load
	//
	// **document.addEventListener("deviceready", onDeviceReady, false);

	// device APIs are available
	//
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;
	}

	// Called when a photo is successfully retrieved
	//
	function onPhotoDataSuccess(imageData) {
		// Uncomment to view the base64-encoded image data
		// console.log(imageData);

		// Get image handle
		//
		var smallImage = document.getElementById('smallImage');

		// Unhide image elements
		//
		smallImage.style.display = 'block';

		// Show the captured photo
		// The in-line CSS rules are used to resize the image
		//
		smallImage.src = "data:image/jpeg;base64," + imageData;
	}

	// Called when a photo is successfully retrieved
	//
	function onPhotoURISuccess(imageURI) {
		// Uncomment to view the image file URI
		// console.log(imageURI);

		// Get image handle
		//
		var largeImage = document.getElementById('largeImage');

		// Unhide image elements
		//
		largeImage.style.display = 'block';

		// Show the captured photo
		// The in-line CSS rules are used to resize the image
		//
		largeImage.src = imageURI;
	}

	// A button will call this function
	//
	function capturePhoto() {
		// Take picture using device camera and retrieve image as base64-encoded string
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality: 50,
			destinationType: destinationType.DATA_URL
		});
	}

	// A button will call this function
	//
	function getPhoto(source) {
		// Retrieve image file location from specified source
		navigator.camera.getPicture(onPhotoURISuccess, onFail, {
			quality: 50,
			destinationType: destinationType.FILE_URI,
			sourceType: source 
		});
	}

	// Called if something bad happens.
	//
	function onFail(message) {
		alert('Failed because: ' + message);
	}
};