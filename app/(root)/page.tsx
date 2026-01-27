
import { prisma } from "@/prisma/prisma-client";
import { Container, Filters, ProductsListGroup, Title, TopBar } from "@/shared/components/shared";

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					productVariants: true,
				},
			},
		},
	});

	
	return (
		<>
			<Container className='mt-10'>
				<Title
					text='All pizzas'
					size='lg'
					className='font-extrabold'
				/>
			</Container>
			<TopBar
				categories={categories.filter(
					(category) => category.products.length > 0,
				)}
			/>

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80]'>
					{/* Filter */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* product list */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								(category) =>
									category.products.length > 0 && (
										<ProductsListGroup
											title={category.name}
											key={category.id}
											items={category.products}
											categoryId={category.id}
										/>
									),
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
