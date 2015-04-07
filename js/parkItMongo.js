


function send(json){
	var formData = JSON.parse(JSON.stringify(jQuery(json).serializeArray()))
	var xhr = new XMLHttpRequest();
    	xhr.open("POST", "https://api.mongolab.com/api/1/databases/parkit/collection/StudentUsers?apiKey=X_7L-M-OY0e-hjHbhVsIM-JLeorp_-xG", true);
    	xhr.setRequestHeader("Content-Type", "application/json");
    	xhr.send(formData);
}

