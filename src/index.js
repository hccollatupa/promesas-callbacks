import { obtenerHeroeAwait, obtenerHeroesArr } from './js/await';

console.time('await');
obtenerHeroeAwait('spiderman2')
    .then(heroe => {
        console.log(heroe);
        console.timeEnd('await');
    }).catch(console.warn);