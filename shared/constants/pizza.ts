const mapPizzaSize = {
	20: "Small",
	30: "Middle",
	40: "Big",
} as const;

const mapPizzaType = {
	1: "traditional",
	2: "thin",
} as const;



// const pizzaSizesArr
//  [
// 	{ value: "Small" , name: "20"},
// 	{ value: "Middle", name: "30" },
// ]

export const pizzaSizesArr = Object.entries(mapPizzaSize).map(([value, name]) => ({
	name,
	value,
}));

export const pizzaTypesArr = Object.entries(mapPizzaType).map(
	([value, name]) => ({
		name,
		value,
	}),
);

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType