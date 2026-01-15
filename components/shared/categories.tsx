import { cn } from "@/lib/utils";
import React from "react";

interface CategoriesProps {
	className?: string;
}

const categories = [
	"Pizza",
	"Combo",
	"Snacks",
	"Cocktails",
	"Coffee",
	"Drinks",
	"Deserts",
];
const activeIndex = 0;

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
	return (
		<div
			className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{categories.map((el, idx) => (
				<a
					key={idx}
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						activeIndex === idx &&
							"bg-white shadow-md shadow-gray-200 text-primary"
					)}
					href=''>
					<button>{el}</button>
				</a>
			))}
		</div>
	);
};
