var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario =  function (horarioReservado){
    var horariosDisponibles = this.horarios.filter(horario => horarioReservado !== horario);
    this.horarios = horariosDisponibles;
}
     
Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

function sumatoria (calificaciones) {
    return calificaciones.reduce((a,b) => a + b); 
}

function promedio (calificaciones){
   var promedio = sumatoria(calificaciones)/calificaciones.length;
   return Math.round(promedio * 10) / 10;
}

Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return promedio(this.calificaciones);
    }

}
