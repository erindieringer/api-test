$(function() {
	 var start = Date.now();
	 var dateString = start.toString();
	//  $.ajax({
	// 	        type: "Post",
	// 	        url: "http://localhost:5000/usage/" + dateString + "/" + dateString,
	// 	        data: {},
	// 	        success: function(result) {
	// 	            console.log(result);
	// 	        },
	// 	        error: function(result) {
	// 	            console.log(result);
	// 	        }
	// });
	$.ajax({
		        type: "Get",
		        url: "http://localhost:5000/usage/",
		        data: {},
		        success: function(result) {
		            console.log("sucess", result);
		        },
		        error: function(result) {
		            console.log("error" + result);
		        }
	});

});


// JSONP VERSION
// $(function() {
// 	 var start = Date.now();
// 	 var dateString = start.toString();
// 	 $.ajax({
// 		        type: "Post",
// 		        url: "http://localhost:5000/usage/" + dateString + "/" + dateString,
// 		        dataType: 'jsonp',
// 		        // jsonpCallback: 'usage',
//         		// jsonp: 'callback',
// 		        success: function(result) {
// 		            console.log("sucess "+ result);
// 		        },
// 		        error: function(result) {
// 		            console.log("error" + result);
// 		        }
// 	});
// 	function usage(data) {
// 		if (!data.Error) {
// 			console.log(data);
// 		}
//   		console.log("json: " + data)
// 	};

// });