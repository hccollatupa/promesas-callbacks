import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'ironman2';

buscarHeroe(heroeId, (err, heroe) => {
    if (err) {
        console.error(err);
    } else {
        console.info(heroe);
    }
});

console.log('Fin del programa');