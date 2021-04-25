import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

const heroeId1 = 'ironman';
const heroeId2 = 'spiderman';

/*
buscarHeroe(heroeId1, (err, heroe1) => {
    if (err) { return console.error(err); }

    buscarHeroe(heroeId2, (err, heroe2) => {
        if (err) { return console.error(err); }

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión.`);
    });
});
*/

buscarHeroe(heroeId1).then(heroe => {
    console.log(`Enviando a ${heroe.nombre} a la misión`);
});

console.log('Fin del programa');