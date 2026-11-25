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
  // Expanded verified food and healing records normalized from PEAK Wiki Items table.
  food('frog-legs', 'Frog Legs', 'Frog_Legs', 2.5, 50, 50, 0, 0),
  food('hot-dog', 'Hot Dog', 'Hot_Dog', 2.5, 30, 60, 20, 30),
  food('honeycomb', 'Honeycomb', 'Honeycomb', 2.5, 10, 20, 50, 75),
  food('purple-kingberry', 'Purple Kingberry', 'Purple_Kingberry', 5, 30, 60, 35, 50),
  food('blue-berrynana', 'Blue Berrynana', 'Blue_Berrynana', 2.5, 30, 60, 0, 10),
  food('brown-berrynana', 'Brown Berrynana', 'Brown_Berrynana', 2.5, 15, 30, 10, 15),
  food('yellow-berrynana', 'Yellow Berrynana', 'Yellow_Berrynana', 2.5, 15, 30, 0, 10),
  food('pink-berrynana', 'Pink Berrynana', 'Pink_Berrynana', 2.5, 15, 30, 0, 10, { poison: -15, heatedPoison: 0 }),
  food('black-clusterberry', 'Black Clusterberry', 'Black_Clusterberry', 2.5, 20, 40, 0, 10),
  food('red-clusterberry', 'Red Clusterberry', 'Red_Clusterberry', 2.5, 10, 20, 0, 10, { injury: 20 }),
  food('yellow-clusterberry', 'Yellow Clusterberry', 'Yellow_Clusterberry', 2.5, 10, 20, 10, 15),
  food('green-kingberry', 'Green Kingberry', 'Green_Kingberry', 5, 30, 60, 0, 10, { poison: -5, heatedPoison: 0 }),
  food('yellow-kingberry', 'Yellow Kingberry', 'Yellow_Kingberry', 5, 30, 60, 0, 10, { poison: -25, heatedPoison: 0 }),
  food('green-crispberry', 'Green Crispberry', 'Green_Crispberry', 2.5, 5, 10, 0, 10, { poison: -10, heatedPoison: 0 }),
  food('red-crispberry', 'Red Crispberry', 'Red_Crispberry', 2.5, 5, 10, 0, 10),
  food('yellow-crispberry', 'Yellow Crispberry', 'Yellow_Crispberry', 2.5, 5, 10, 10, 15),
  food('gold-prickleberry', 'Gold Prickleberry', 'Gold_Prickleberry', 2.5, 15, 30, 0, 10, { injury: 10 }),
  food('red-prickleberry', 'Red Prickleberry', 'Red_Prickleberry', 2.5, 15, 30, 0, 10),
  food('orange-winterberry', 'Orange Winterberry', 'Orange_Winterberry', 2.5, 15, 30, 0, 10),
  food('marshmallow', 'Marshmallow', 'Marshmallow', 2.5, 15, 30, 0, 10),
  food('egg', 'Egg', 'Egg', 5, 15, 30, 0, 10),
  food('scout-cookies', 'Scout Cookies', 'Scout_Cookies', 5, 10, 20, 10, 15),
  food('fortified-milk', 'Fortified Milk', 'Fortified_Milk', 2.5, 10, 20, 0, 10),
  food('big-lollipop', 'Big Lollipop', 'Big_Lollipop', 2.5, 5, 10, 0, 10),
  food('napberry', 'Napberry', 'Napberry', 2.5, 100, 100, 0, 0),
  food('chubby-shroom', 'Chubby Shroom', 'Chubby_Shroom', 2.5, 10, 20, 0, 10),
  food('cluster-shroom', 'Cluster Shroom', 'Cluster_Shroom', 2.5, 5, 10, 0, 10),
  food('cluster-shroom-poisonous', 'Cluster Shroom (Poisonous)', 'Cluster_Shroom', 2.5, 5, 10, 0, 10, { poison: -40 }),
  food('tick', 'Tick', 'Tick', 2.5, 20, 40, 0, 10),
  food('the-early-worm', 'The Early Worm', 'The_Early_Worm', 0, 5, 5, 0, 0),
  tool('cure-all', 'Cure-All', 'Cure-All', 5, { poison: 'all', injury: 'all', heating: 'unchanged' }),
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
