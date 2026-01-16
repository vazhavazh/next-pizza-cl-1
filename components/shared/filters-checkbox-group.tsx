"ise client";
import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterCheckboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems: Item[];
	limit?: number;
	searchInputPlaceHolder?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];

	className?: string;
}

export const FiltersCheckboxGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceHolder = "Search...",
	onChange,
	defaultValue,
	className,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");

	const list = showAll
		? items.filter((el) =>
				el.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: defaultItems.slice(0, limit);

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
						checked={false}
						onCheckedChange={(ids) => console.log(ids)}
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
