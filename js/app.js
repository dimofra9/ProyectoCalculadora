var Calculadora = {
	existeOp: "no",
	ultOp: "",
	cadena: "",
//Metodo de Inicialización
	init: function(){
		this.asignarEventoBtn('teclado')
	},
	
// Metodos al presionar Boton
	asiganarEventoBtn: function(selector){
		var teclas = document.querySelectorAll('.' + selector + ' img')
		for(i=0;i<teclas.length;i++){
			teclas[i].onclick = this.eventoPresionTecla
			teclas[i].onmouseleave = this.eventoSoltoTecla
		}
	},
	

}