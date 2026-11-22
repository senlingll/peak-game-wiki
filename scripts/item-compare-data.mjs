export const itemCompareSourceDate = '2026-11-22';
export const itemCompareStages = ['base', 'cooked', 'wellDone', 'burnt', 'incinerated'];
export const itemCompareMetrics = ['hunger', 'poison', 'injury', 'stamina', 'weight'];

const food = (id, name, source, weight, hunger, cookedHunger, stamina, cookedStamina, extras = {}) => ({
  id, name, source, weight,
  food: { hunger, cookedHunger, stamina, cookedStamina },
  ...extras,
});

const tool = (id, name, source, weight, extras) => ({ id, name, source, weight, ...extras });

export const itemCompareRecords = [
  food('airline-food', 'Airline Food', 'Airline_Food', 5, 40, 80, 40, 60),
  food('granola-bar', 'Granola Bar', 'Granola_Bar', 2.5, 15, 30, 20, 30),
  food('trail-mix', 'Trail Mix', 'Trail_Mix', 2.5, 10, 20, 10, 15),
  food('half-coconut', 'Half-Coconut', 'Half-Coconut', 5, 10, 20, 0, 10, { note: 'coconut' }),
  food('medicinal-root', 'Medicinal Root', 'Medicinal_Root', 2.5, 5, 10, 0, 10, { poison: 25, heatedPoison: 45, injury: 10 }),
  tool('antidote', 'Antidote', 'Antidote', 2.5, { poison: 35, note: 'antidote', heating: 'cloud' }),
  tool('bandages', 'Bandages', 'Bandages', 2.5, { injury: 30, note: 'bandages', heating: 'unchanged' }),
  tool('first-aid-kit', 'First Aid Kit', 'First_Aid_Kit', 5, { poison: 'all', injury: 'all', note: 'firstAid', heating: 'unchanged' }),
  tool('remedy-fungus', 'Remedy Fungus', 'Remedy_Fungus', 2.5, {
    poison: 35, injury: 52.5, conditional: ['poison', 'injury'], note: 'fungus',
  }),
  ...[['bugle', 'Bugle Shroom', 'Bugle_Shroom', 15, 20], ['button', 'Button Shroom', 'Button_Shroom', 10, 30]]
    .flatMap(([id, name, source, hunger, poison]) => [
      food(id, name, source, 2.5, hunger, hunger * 2, 0, 10, { variant: 'normal', note: id }),
      food(id + '-poisonous', name, source, 2.5, hunger, hunger * 2, 0, 10, { variant: 'poisonous', poison: -poison, note: id }),
      food(id + '-unknown', name, source, 2.5, hunger, hunger * 2, 0, 10, { variant: 'unknown', poison: null, note: id }),
    ]),
];

export function getItemStages(item) {
  if (item.food) return itemCompareStages;
  if (item.heating === 'unchanged') return itemCompareStages;
  return item.heating === 'cloud' ? ['base', 'cooked'] : ['base'];
}

export function getItemEffects(item, stage) {
  const { food, injury = 0, poison = 0, weight } = item;
  const heated = stage !== 'base';
  if (food && stage === 'incinerated') {
    return { hunger: null, poison: null, injury: null, stamina: null, weight, note: 'incinerated' };
  }
  if (item.heating === 'cloud' && heated) {
    return { hunger: 0, poison: 20, injury: 0, stamina: 0, weight: null, conditional: ['poison'], note: 'antidoteCloud' };
  }
  const hunger = (heated ? food?.cookedHunger : food?.hunger) ?? 0;
  return {
    hunger: stage === 'burnt' ? Math.max(0, hunger - 5) : hunger,
    poison: heated ? item.heatedPoison ?? poison : poison,
    injury,
    stamina: (heated ? food?.cookedStamina : food?.stamina) ?? 0,
    weight,
    conditional: item.conditional,
    note: item.note,
  };
}
