$( document ).ready(function() {
    console.log( "ready!" );

    var length;
    var load;
    var depth;

    // M =  (1/8) * q * L^2
    var m;
    // V = (1/2)* q *L;
    var v;

	$('#calc').on('click','#submit', function(){
		length = $("#length").val();
		load = $("#load").val();
		depth = $("#depth").val();

		m = 0.125 * load * length * length;
		v = 0.5 * load * length;

		console.log( 'input: ' + length +' ' + load +' '+depth +' M & V: m = ' +m + ' v = ' + v);
	

		// go check in json file
		$.getJSON('assets/javascript/data/data.json', function(data) {
			console.log(data.glp.length);
			for (var i = 0; i < data.glp.length; i++) {
				console.log(data.glp[i].name);
			}
		});
	});
});