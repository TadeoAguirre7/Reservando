var expect = chai.expect;

describe("Test de horarios del restaurante", () => {
    let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"],
        "../img/asiatica1.jpg", [7, 9, 2, 5, 10]);
    it("Al reservar un horario del arreglo, se elimina ese horario", () => {
        restaurant.reservarHorario("15:30");
        expect(restaurant.horarios).eql(["13:00", "18:00"]);
    });
    it("Cuando se reserva un horario inexistente, no se modifica nada", () => {
        restaurant.reservarHorario("20:00");
        expect(restaurant.horarios).eql(restaurant.horarios);
    });
    it("Si el parametro esta vacio, no se modifica nada en el array", () => {
        restaurant.reservarHorario();
        expect(restaurant.horarios).eql(restaurant.horarios);
    });
});

describe("Test de la puntacion del restaurante", () => {
    it("Dado un restaurante con determinadas calificaciones, la puntacion se calcula correctamene", () => {
        let nuevoRestaurante = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["12:30", "14:30", "15:00"],
            "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
        expect(nuevoRestaurante.obtenerPuntuacion()).to.equal(6.6);
    });
    it("Dado un restaurante que no tiene ninguna calificaion, la puntuacion es 0 ", () => {
        let nuevoRestaurante = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["12:30", "14:30", "15:00"],
            "../img/asiatica2.jpg", []);
        expect(nuevoRestaurante.obtenerPuntuacion()).to.equal(0);
    });
});

describe("Test de calificaciones", () =>{
    it("Si a un restaurante se le da una puntacion menor a 0, no pasa nada", () =>{
        let nuevoRestaurante = new Restaurant(6, "Green salad","Ensalada","Berlin", ["17:00","19:00","20:30"],
        "../img/ensalada2.jpg",[5, 5, 6, 4, 6]);
        let totalCalificacion = nuevoRestaurante.calificaciones.length;
        nuevoRestaurante.calificar(-6);
        expect(nuevoRestaurante.calificaciones.length).to.equal(totalCalificacion);
    });
    it("Si a un restaurante se le da una puntacion mayor a 10, no pasa nada", () =>{
        let nuevoRestaurante = new Restaurant(6, "Green salad","Ensalada","Berlin", ["17:00","19:00","20:30"],
        "../img/ensalada2.jpg",[5, 5, 6, 4, 6]);
        let totalCalificacion = nuevoRestaurante.calificaciones.length;
        nuevoRestaurante.calificar(17);
        expect(nuevoRestaurante.calificaciones.length).to.equal(totalCalificacion);
    });
    it("Si a un restaurante se le da una puntacion entre 0 y 10, se agrega la calificaion correctamente", () =>{
        let nuevoRestaurante = new Restaurant(6, "Green salad","Ensalada","Berlin", ["17:00","19:00","20:30"],
        "../img/ensalada2.jpg",[5, 5, 6, 4, 6]);
        let totalCalificacion = nuevoRestaurante.calificaciones.length;
        nuevoRestaurante.calificar(8);
        expect(nuevoRestaurante.calificaciones.length).to.equal(totalCalificacion+1);
    });
});

describe ('Test de busqueda de Restaurantes', function(){
    it('si paso un ID Valido, tiene que devolver un objeto', function(){
        expect(listado.buscarRestaurante(9)).to.be.an("Object");
    });
    it('Si paso un ID invalido, debe devolver un String',function(){
        expect(listado.buscarRestaurante(26)).to.be.an("String");
    });
});

describe('Test de la funcion obtenerRestaurantes',function(){
    it('Lugar y horario correctos y rubro null, devuelve un array',function(){
        expect(listado.obtenerRestaurantes(null, "Roma", "18:00")).to.be.an("Array");
    });
    it('Rubro y horario correctos y lugar null, devuelve un array',function(){
        expect(listado.obtenerRestaurantes("Pizza", null, "18:00")).to.be.an("Array");
    });
    it('Rubro y lugar correctos y horario null, devuelve un array',function(){
        expect(listado.obtenerRestaurantes("Pizza", "Roma", null)).to.be.an("Array");
    });
    it('Si todos los parametros son nulos, devuelve todos los Restaurantes',function(){
        expect(listado.obtenerRestaurantes(null, null, null).length).to.equal(24);
    });
});

describe('Test de reserva', function () {
    let reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
    let reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
    let reserva3 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES15");
    it('Que el restaurante correctamente su precio base', function () {
        expect(reserva1.calcularPrecioBase()).to.equal(2800);
    });
    it('Que el restaurante calcule correctamente el precio final', function () {
        expect(reserva1.calcularPrecioFinal()).to.equal(2450);
    });

    it('Que el restaurante calcule correctamente el precio final con un descuento de $200', function () {
        expect(reserva2.calcularPrecioFinal()).to.equal(100);
    });

    it('Que el restaurante calcule correctamente el precio final con un descuento del 15%', function () {
        expect(reserva3.calcularPrecioFinal()).to.equal(255);
    });

});