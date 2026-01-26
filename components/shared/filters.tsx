"use client";

import React from "react";
import { Title, RangeSlider, FiltersCheckboxGroup } from "./index";
import { Input } from "../ui";
import { useQueryFilter, useGetIngredients, useFilters } from "@/hooks";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useGetIngredients();
	const filters = useFilters();

	useQueryFilter(filters);

	const items = ingredients.map((el) => ({
		text: el.name,
		value: String(el.id),
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrice("priceFrom", prices[0]);
		filters.setPrice("priceTo", prices[1]);
	};

	return (
		<div className={className}>
			<Title
				text='Filters'
				size='sm'
				className='mb-5 font-bold'
			/>

			{/* {Upper Checkboxes} */}

			<FiltersCheckboxGroup
				title='Dough type'
				name='dough-type'
				className='mb-5'
				items={[
					{ text: "Thin", value: "1" },
					{ text: "Thick", value: "2" },
				]}
				selectedValues={filters.pizzaTypes}
				onClickCheckBox={filters.setPizzaTypes}
			/>

			<FiltersCheckboxGroup
				title='Sizes'
				name='sizes'
				className='mb-5'
				items={[
					{ text: "20cm", value: "20" },
					{ text: "30cm", value: "30" },
					{ text: "40cm", value: "40" },
				]}
				selectedValues={filters.sizes}
				onClickCheckBox={filters.setSizes}
			/>

			{/* Price Filter */}
			<div className='py-6 mt-5 border-y border-y-neutral-100 pb-7'>
				<p className='mb-3 font-bold '>Price from and to</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.price.priceFrom)}
						onChange={(e) =>
							filters.setPrice("priceFrom", Number(e.target.value))
						}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={30000}
						value={String(filters.price.priceTo)}
						onChange={(e) =>
							filters.setPrice("priceTo", Number(e.target.value))
						}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
					onValueChange={updatePrices}
				/>
			</div>

			<FiltersCheckboxGroup
				title='Ingredients'
				name='ingredients'
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				selectedValues={filters.selectedIngredients}
				onClickCheckBox={filters.setIngredients}
			/>
		</div>
	);
};
