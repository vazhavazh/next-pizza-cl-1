"use client";
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
	title: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	items: any[];
	categoryId: number;
	className?: string;
	listClassName?: string;
}

export const ProductsListGroup: React.FC<Props> = ({
	title,
	items,
	categoryId,
	className,
	listClassName,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef<HTMLDivElement>(null);
	const intersection = useIntersection(
		intersectionRef as React.RefObject<HTMLElement>,
		{ threshold: 0.4 },
	);

	React.useEffect(() => {
		if (intersection && intersection.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [
		intersection?.isIntersecting,
		title,
		categoryId,
		intersection,
		setActiveCategoryId,
	]);
	return (
		<div
			className={className}
			id={title}
			ref={intersectionRef}>
			<Title
				text={title}
				size='lg'
				className='mb-5 font-extrabold'
			/>

			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{items.map((el, idx) => (
					<ProductCard
						key={el.id}
						id={el.id}
						name={el.name}
						imageUrl={el.imageUrl}
						price={el.items[0].price}
					/>
				))}
			</div>
		</div>
	);
};
