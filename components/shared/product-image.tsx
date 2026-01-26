import { cn } from "@/lib/utils";
import React from "react";

interface ProductImageProps {
	className?: string;
	src: string;
	size: number;
}

export const ProductImage: React.FC<ProductImageProps> = ({
	className,
	src,
	size,
}) => {
	return (
		<div
			className={cn(
				"relative flex items-center justify-center flex-1 w-full",
				className,
			)}>
			<img
				src={src}
				alt='Logo'
				className={cn(
					"relative left-2 top-2 transition-all z-10 duration-300",
					{
						"w-[300px] h-[300px]": size === 20,
						"w-[400px] h-[400px]": size === 30,
						"w-[500px] h-[500px]": size === 40,
					},
				)}
			/>

			<div className='absolute -translate-x-1/2 -translate-y-1/2 border-2 border-gray-200 border-dashed left-1/2 top-1/2 rounded-full w-[450px] h-[450px]'></div>
			<div className='absolute -translate-x-1/2 -translate-y-1/2 border-2 border-gray-100 border-dashed left-1/2 top-1/2 rounded-full w-[370px] h-[370px]'></div>
		</div>
	);
};

