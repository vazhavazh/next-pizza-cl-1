"use client";

import React from "react";
import { Title } from "./title";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { FiltersCheckboxGroup } from "./filters-checkbox-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
	className?: string;
}

interface PriceProps {
	priceFrom: number;
	priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, selectedIngredients, onAddId } =
		useFilterIngredients();
	const [price, setPrice] = React.useState<PriceProps>({
		priceFrom: 0,
		priceTo: 1000,
	});
	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
	const [pizzaTypes, { toggle: togglePizzaType }] = useSet(new Set<string>([]));
	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...price,
			[name]: value,
		});
	};

	const items = ingredients.map((el) => ({
		text: el.name,
		value: String(el.id),
	}));

	React.useEffect(() => {
		console.log({ sizes, pizzaTypes, price, selectedIngredients });
	}, [sizes, pizzaTypes, price, selectedIngredients]);

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
				selectedValues={pizzaTypes}
				onClickCheckBox={togglePizzaType}
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
				selectedValues={sizes}
				onClickCheckBox={toggleSizes}
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
						value={String(price.priceFrom)}
						onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={30000}
						value={String(price.priceTo)}
						onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[price.priceFrom, price.priceTo]}
					onValueChange={([priceFrom, priceTo]) =>
						setPrice({ priceFrom, priceTo })
					}
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
				onClickCheckBox={onAddId}
				selectedValues={selectedIngredients}
			/>
		</div>
	);
};
