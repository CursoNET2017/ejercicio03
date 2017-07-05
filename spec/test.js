var miModulo = require('../index.js');

describe("A suite is just a function", function(){
	var resultado;

	it("and si is a spec", function(){
		resultado = miModulo.sumar(4,5);;

		expect(resultado).toBe(9);
	});
});
