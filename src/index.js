import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capitanAmerica';

buscarHeroe(heroeId, (heroe) => {
    console.log(heroe);
});