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

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}