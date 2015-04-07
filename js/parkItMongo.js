
var json;

function send(){
	json = {
	'userName': $('#exampleInputEmail1').val(),
	'passWord': $('#exampleInputPassword1').val()
	}

	$.ajax( { url: "https://api.mongolab.com/api/1/databases/parkit/collections/StudentUsers?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG",
		  data: JSON.stringify( [{'userName': $('#exampleInputEmail1').val()}, {'passWord': $('#exampleInputPassword1').val()} ]),
		  type: "POST",
		  contentType: "application/json" } );
	
}

