import { sortHeroesByHealth } from './sortHeroes';

describe('sortHeroesByHealth', () => {
  test('sorts heroes by health', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 }
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('same object, reference check with toBe', () => {
    const hero = { name: 'мечник', health: 10 };
    expect(hero).toBe(hero); 
  });

  test('different object, reference check with toBe', () => {
    const hero1 = { name: 'маг', health: 100 };
    const hero2 = { name: 'маг', health: 100 };
    expect(hero1).toBe(hero2); 
  });
});