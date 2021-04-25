const heroes = {
    ironman: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    capitanAmerica: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    spiderman: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica a las picaduras de arañas'
    }
}

//callback retorna un heroe
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if (heroe) {
        callback(null, heroe);
    } else {
        //Un error
        callback(`No existe un héroe con el id ${id}`);
    }
    //callback(heroe);
};