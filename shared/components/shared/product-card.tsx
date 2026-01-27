import Link from "next/link";
import React from "react";
import { Button } from "@/shared/components/ui";
import { Title } from "./index";
import { Plus } from "lucide-react";

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 rounded-lg bg-secondary h-[260px]'>
					<img
						className='w-[250px] h-[215px]'
						src={imageUrl}
						alt={name}
					/>
				</div>
				<Title
					text={name}
					size='sm'
					className='mt-3 mb-1 font-bold'
				/>

				<p className='text-sm text-gray-400 '>
					Chicken, mozzarella, cheese cheder and parmesan, cheese sauce,
					tomatoes, sauce alfredo, garlic
				</p>

				<div className='flex items-center justify-between mt-4'>
					<span className='text-[20px]'>
						from <b>{price} €</b>
					</span>

					<Button variant='secondary'>
						<Plus
							size={20}
							className='mr-1'
						/>
						Add
					</Button>
				</div>
			</Link>
		</div>
	);
};
