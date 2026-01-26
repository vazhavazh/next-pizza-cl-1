import { Container } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
	});

	if (!product) {
		return notFound();
	}

	return (
		<Container className='flex flex-col my-10'>
			<ProductImage
				src={product.imageUrl}
				className=''
			/>
		</Container>
	);
}

07:41:20