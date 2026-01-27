import React from "react";

interface IngredientProps {
	className: string;
	imageUrl: string;
	name: string;
	price: number;
	active?: boolean;
	onClick?: () => void;
}

export const Ingredient: React.FC<IngredientProps> = ({ className }) => {
	return <div className={className}></div>;
};

09:22:12