"use client";

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { FiltersCheckboxGroup } from "./filters-checkbox-group";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title
				text='Filters'
				size='sm'
				className='mb-5 font-bold'
			/>

			<div className='flex flex-col gap-4'>
				<FilterCheckbox
					text='Can collect'
					value='1'
				/>
				<FilterCheckbox
					text='New'
					value='2'
				/>
			</div>

			<div className='py-6 mt-5 border-y border-y-neutral-100 pb-7'>
				<p className='mb-3 font-bold '>Price from and to</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						defaultValue={500}
						max={30000}
					/>
				</div>

				<RangeSlider
					min={0}
					max={5000}
					step={10}
					value={[0, 5000]}
				/>
			</div>

			<FiltersCheckboxGroup
				title='Ingredients'
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: "Cheese sauce",
						value: "1",
					},
					{
						text: "Mozzarella",
						value: "2",
					},
					{
						text: "Garlic",
						value: "3",
					},
					{
						text: "Canned cucumbers",
						value: "4",
					},
					{
						text: "Red onion",
						value: "5",
					},
					{
						text: "Tomato",
						value: "6",
					},
				]}
				items={[
					{
						text: "Cheese sauce",
						value: "1",
					},
					{
						text: "Mozzarella",
						value: "2",
					},
					{
						text: "Garlic",
						value: "3",
					},
					{
						text: "Canned cucumbers",
						value: "4",
					},
					{
						text: "Red onion",
						value: "5",
					},
					{
						text: "Tomato",
						value: "6",
					},
					{
						text: "Cheese sauce",
						value: "1",
					},
					{
						text: "Mozzarella",
						value: "2",
					},
					{
						text: "Garlic",
						value: "3",
					},
					{
						text: "Canned cucumbers",
						value: "4",
					},
					{
						text: "Red onion",
						value: "5",
					},
					{
						text: "Tomato",
						value: "6",
					},
				]}
			/>
		</div>
	);
};
