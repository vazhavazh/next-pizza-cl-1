import React from "react";
import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";

interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
}

export interface FilterProps {
	sizes: Set<string>;
	pizzaTypes: Set<string>;
	price: PriceProps;
	selectedIngredients: Set<string>;
}

interface ReturnProps extends FilterProps {
	setSizes: (value: string) => void;
	setPizzaTypes: (value: string) => void;
	setIngredients: (value: string) => void;
	setPrice: (name: keyof PriceProps, value: number) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>;

	// Ingredient Filter
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get("ingredients")?.split(",")),
	);

	// Size Filter
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : [],
		),
	);

	// Pizza Type Filter
	const [pizzaTypes, { toggle: togglePizzaType }] = useSet(
		new Set<string>(
			searchParams.has("pizzaTypes")
				? searchParams.get("pizzaTypes")?.split(",")
				: [],
		),
	);

	// Price Filter
	const [price, setPrice] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get("priceFrom")) || undefined,
		priceTo: Number(searchParams.get("priceTo")) || undefined,
	});

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return {
		sizes,
		pizzaTypes,
		price,
		selectedIngredients,
		setPrice: updatePrice,
		setPizzaTypes: togglePizzaType,
		setSizes: toggleSizes,
		setIngredients: toggleIngredients,
	};
};
