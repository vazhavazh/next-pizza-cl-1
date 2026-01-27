import { cn } from "@/shared/lib/utils";
import React from "react";
import { IngredientItem, PizzaImage, Title, VariantSelector } from "./index";
import { Button } from "../ui";
import {
	PizzaSize,
	pizzaSizesArr,
	PizzaType,
	pizzaTypesArr,
} from "@/shared/constants/pizza";
import { Ingredient } from "@prisma/client";

interface ChoosePizzaFormProps {
	imageUrl: string;
	name: string;
	ingredients: Ingredient[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	items?: any[];
	onClickAdd?: VoidFunction;
	className?: string;
}

export const ChoosePizzaForm: React.FC<ChoosePizzaFormProps> = ({
	imageUrl,
	name,
	ingredients,
	items,
	onClickAdd,
	className,
}) => {
	const [size, setSize] = React.useState<PizzaSize>(20);
	const [type, setType] = React.useState<PizzaType>(1);
	const textDetails = "30 cm,  traditional dough 30, 590 g";
	const totalPrice = 35;
	console.log(ingredients);
	return (
		<div className={cn(className, "flex flex-1")}>
			
				<PizzaImage
				className="mb-12"
					src={imageUrl}
					size={size}
				/>
			

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title
					text={name}
					size='md'
					className='mb-1 font-extrabold'
				/>
				<p className='text-gray-400'>{textDetails}</p>
				<div className='flex flex-col gap-4 mt-5'>
					<VariantSelector
						selectedValue={String(size)}
						onClick={(value) => setSize(Number(value) as PizzaSize)}
						items={pizzaSizesArr}
					/>
					<VariantSelector
						selectedValue={String(type)}
						onClick={(value) => setType(Number(value) as PizzaType)}
						items={pizzaTypesArr}
					/>
				</div>

				<div className='p-5 rounded-md bg-gray-50 h-[420px] overflow-auto scrollbar'>
					<div className='grid grid-cols-3 gap-3 '>
						{ingredients.map((ingredient) => (
							<IngredientItem
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								onClick={onClickAdd}
							/>
						))}
					</div>
				</div>
				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Add to bucket for {totalPrice} €
				</Button>
			</div>
		</div>
	);
};


09:27:43