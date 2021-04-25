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

export const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id];
    if (heroe) {
        return heroe;
    } else {
        throw `No existe un héroe con el id ${id}`;
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa rápida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}