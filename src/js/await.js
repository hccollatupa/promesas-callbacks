import { buscarHeroeAsync } from './promesas';

const heroesId = ['ironman', 'capitanAmerica', 'spiderman'];

export const obtenerHeroesArr = async() => {
    const heroesArr = [];
    for (const id of heroesId) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }
    return heroesArr;
}