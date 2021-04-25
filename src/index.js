import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

buscarHeroe('ironman')
    .then(heroe => console.log(heroe))
    .catch(console.warn);

buscarHeroeAsync('spiderman')
    .then(heroe => console.log(heroe))
    .catch(console.warn);