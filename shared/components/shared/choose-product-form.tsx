import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./index";
import { Button } from "@/shared/components/ui";

interface ChooseProductFormProps {
	imageUrl: string;
	name: string;
	onClickAdd?: VoidFunction;
	className?: string;
}

export const ChooseProductForm: React.FC<ChooseProductFormProps> = ({
	imageUrl,
	name,
	onClickAdd,
	className,
}) => {
	const textDetails = "30 cm,  traditional dough 30, 590 g";
	const totalPrice = 35;
	return (
		<div className={cn(className, "flex flex-1")}>
			<div className='relative flex items-center justify-center flex-1 w-full'>
				<img
					src={imageUrl}
					alt={name}
					className='relative z-10 transition-all duration-300 left-2 top-2 w-[350px] h-[350px]'
				/>
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title
					text={name}
					size='md'
					className='mb-1 font-extrabold'
				/>
				<p className='text-gray-400'>{textDetails}</p>
				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Add to bucket for {totalPrice} €
				</Button>
			</div>
		</div>
	);
};
