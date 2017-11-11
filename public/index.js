$(function() {
	 var start = Date.now();
	 var dateString = start.toString();
	 $.ajax({
		        type: "Post",
		        url: "http://localhost:5000/usage/" + dateString + "/" + dateString,
		        data: {},
		        success: function(result) {
		            console.log(result);
		        },
		        error: function(result) {
		            console.log(result);
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
// 		        data: {},
// 		        dataType: 'jsonp',
// 		        jsonpCallback: 'usage',
//         		jsonp: 'callback',
// 		        success: function(result) {
// 		            console.log(result);
// 		        },
// 		        error: function(result) {
// 		            console.log(result);
// 		        }
// 	});
// 	function usage(data) {
// 		if (!data.Error) {
// 			console.log(data);
// 		}
//   		console.log("json: " + data)
// 	};

// });