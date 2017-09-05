//TP CLASE 4

// Crear "fabrica" de peliculas

function FabricaPeliculas (idPelicula, tituloPelicula, descripcionPelicula, annoPelicula, duracionPelicula, actoresPelicula, directorPelicula){
    this.id = idPelicula
    this.titulo = tituloPelicula
    this.descripcion = descripcionPelicula
    this.anno = annoPelicula
    this.duracion = duracionPelicula
    this.actores = actoresPelicula
    this.director = directorPelicula
    this.cambiarTitulo = function (nuevoTitulo) {
        this.titulo = nuevoTitulo
        console.log("Has cambiado el titulo de la pelicula a: " + this.titulo)
    }
    this.cambiarDescripcion = function (nuevaDescripcion) {
        this.descripcion = nuevaDescripcion
        console.log("Has cambiado la descripcion de la pelicula a: " + this.descripcion)
    }
    this.cambiarAnno = function (nuevoAnno) {
        this.anno = nuevoAnno
        console.log("Has cambiado el año de la pelicula a: " + this.anno)
    }
    this.cambiarDuracion = function (nuevaDuracion) {
        this.duracion = nuevaDuracion
        console.log("Has cambiado la duracion de la pelicula a: " + this.duracion)
    }
    this.sacarActor = function () {
        if (this.actores.length>0){
            var ultimoActor = this.actores[this.actores.length-1]
            console.log("Has eliminado a: " + ultimoActor + " del reparto de la pelicula")
            this.actores.pop()
        } else{
            console.log("No tiene ningun actor para eliminar")
        }
    }
    this.agregarActor = function (nuevoActor) {
        this.actores.push(nuevoActor)
        console.log("Has agregado a " + nuevoActor + " como parte del reparto de la pelicula")
    }
    this.cambiarDirector = function (nuevoDirector){
        this.director = nuevoDirector
        console.log("Has cambiado el director de la pelicula a: " + this.director)
    }
}

// Crear Pelicula

var peli1 = new FabricaPeliculas( 01, "Fight Club", "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more. ", 1999, "2hs 19min", ["Brad Pitt", "Edward Norton", "Meat Loaf" ], "David Fincher")



   











