"ise client";
import React from "react";

import { Input, Skeleton } from "../ui";
import { FilterCheckboxProps } from "./filter-checkbox";
import {FilterCheckbox} from "./index"

type Item = FilterCheckboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceHolder?: string;
	onClickCheckBox?: (id: string) => void;
	defaultValue?: string[];
	selectedValues?: Set<string>;
	className?: string;
	name?: string;
}

export const FiltersCheckboxGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	searchInputPlaceHolder = "Search...",
	onClickCheckBox,
	selectedValues,
	
	className,
	name,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");

	if (loading) {
		return (
			<div className={className}>
				<p className='mb-3 font-bold'>{title}</p>
				{...Array(limit)
					.fill(0)
					.map((_, idx) => (
						<Skeleton
							key={idx}
							className='h-6 mb-4 rounded-[8px]'
						/>
					))}
				<Skeleton className='w-[28px] h-6 mb-4 rounded-[8px]' />
			</div>
		);
	}

	const list = showAll
		? items.filter((el) =>
				el.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
			)
		: (defaultItems || items).slice(0, limit);

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className={className}>
			<p className='mb-3 font-bold'>{title}</p>
			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceHolder}
						className='mb-4 bg-gray-500 border-none'
					/>
				</div>
			)}
			<div className='flex flex-col gap-4 pr-2 overflow-auto max-h-96 scrollbar'>
				{list.map((el, idx) => (
					<FilterCheckbox
						key={idx}
						text={el.text}
						value={el.value}
						endAdornment={el.endAdornment}
						checked={selectedValues?.has(el.value)}
						onCheckedChange={() => onClickCheckBox?.(el.value)}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='mt-3 text-primary'>
						{showAll ? "Hide" : "+ Show all"}
					</button>
				</div>
			)}
		</div>
	);
};
