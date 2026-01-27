"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ProductWithRelations } from "@/@types/prisma";
import { Dialog } from "@/shared/components/ui";
import { DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";

interface ChooseProductModalProps {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal: React.FC<ChooseProductModalProps> = ({
	product,
	className,
}) => {
	const router = useRouter();
	const isPizza = Boolean(product.productVariants[0].pizzaType);

	return (
		<Dialog
			open={Boolean(product)}
			onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className,
				)}>
				<VisuallyHidden.Root>
					<DialogTitle>{product.name}</DialogTitle>
				</VisuallyHidden.Root>
				{isPizza ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
};

// 09:02:22
