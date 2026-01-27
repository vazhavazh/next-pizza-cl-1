import { Ingredient, Product, ProductVariant } from "@prisma/client";

export type ProductWithRelations = Product & {
	productVariants: ProductVariant[];
	ingredients: Ingredient[];
};
