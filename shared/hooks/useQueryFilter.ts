import React from "react";
import { useRouter } from "next/navigation";
import { FilterProps } from "./useFilters";
import qs from "qs";

export const useQueryFilter = (filters: FilterProps) => {
	const router = useRouter();

	React.useEffect(() => {
		const params = {
			...filters.price,
			pizzaTypes: Array.from(filters.pizzaTypes),
			sizes: Array.from(filters.sizes),
			ingredients: Array.from(filters.selectedIngredients),
		};

		const query = qs.stringify(params, { arrayFormat: "comma" });
		router.push(`?${query}`, { scroll: false });
	}, [
		filters.pizzaTypes,
		filters.price,
		filters.selectedIngredients,
		filters.sizes,
		router,
	]);
};
