
var json;

function mongoPOST(){


	var validEmail = false;
	validEmail = validate();

	//var userCar = $('car').append($('#exampleInputEmail1').val());

	//Creates JSON object that will be sent to the MongoDB


	//MONGOLAB API
	//if(validEmail ===  true){
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/parkit/collections/ParkingLot?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG",
			  data: JSON.stringify({

			  	userName:$('#exampleInputEmail1').val(),
			  	passWord: $('#exampleInputPassword1').val(),
			  	fullName: $('#fullName').val(),
			  	//vehicleID: userCar

			  }),
			  type: "POST",
			  contentType: "application/json" } );
	//}

}

function mongoGet(){





	//MONGOLAB API
	//if(validEmail ===  true){  https://api.mongolab.com/api/1/databases/my-db/collections?apiKey=myAPIKey
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/parkit/collections/ParkingLot?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG",
			  data: JSON.stringify({

			  	"lotName": "lotName",
    				"parkingSpot": "number",
    				"Filled": "false"

			  	//vehicleID: userCar

			  }),
			  type: "GET",
			  contentType: "application/json" } );
	//}

}


function send(){


	var validEmail = false;
	validEmail = validate();

	//var userCar = $('car').append($('#exampleInputEmail1').val());

	//Creates JSON object that will be sent to the MongoDB


	//MONGOLAB API
	if(validEmail ===  true){
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/parkit/collections/StudentUsers?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG",
			  data: JSON.stringify({

			  	userName:$('#exampleInputEmail1').val(),
			  	passWord: $('#exampleInputPassword1').val(),
			  	fullName: $('#fullName').val(),
			  	//vehicleID: userCar

			  }),
			  type: "POST",
			  contentType: "application/json" } );
	}

}

function setVacant(){




	//Creates JSON object that will be sent to the MongoDB


	//MONGOLAB API
	//if(validEmail ===  true){
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/parkit/collections/ParkingLot?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG&q={'spotNumber':3}",
			  data: JSON.stringify({
			  	"lotName": "WoodLand",
    				"spotNumber": 3,
			  	"vacant":false,
			  	//vehicleID: userCar
			  }),
			  type: "PUT",
			  contentType: "application/json" } );
	//}

}


