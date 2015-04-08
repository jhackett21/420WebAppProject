
var json;

function send(){

	var validEmail = false; 
	validEmail = validate();

	//var userCar = $('car').append($('#exampleInputEmail1').val());

	//Creates JSON object that will be sent to the MongoDB
	

	//MONGOLAB API
	if(validEmail == true){
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

