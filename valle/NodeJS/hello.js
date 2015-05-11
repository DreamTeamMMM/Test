var http 		= require('http');

http.createServer(function(request, response){
	var mysql      	= require('mysql');
	var connection 	= mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'member_area',
	  port	   : 8889
	});
	connection.connect();
	//connection.query("NodeJS-Test");
	connection.query('SELECT Username, Email from Users', function(err, rows, fields) {
	  if (!err)
	    console.log('The solution is: ', rows);
	  else
	    console.log('Error while performing Query.');
	});
	
	connection.end();



//	 response.writeHead(200);
//	 response.write("Hawk is fucking!\n");
//	 setTimeout(function(){
//	 	response.write("Fuckings done...\n");
//	 	response.end();
//	 }, 5000);
}).listen(8080);

console.log('Listening port 8080');