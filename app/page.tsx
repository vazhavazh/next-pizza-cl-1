import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductsListGroup } from "@/components/shared/products-list-group";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title
					text='All pizzas'
					size='lg'
					className='font-extrabold'
				/>
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80]'>
					{/* Filter */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* product list */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsListGroup
								title='Pizza'
								items={[
									{
										id: 1,
										name: "Margherita",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif",
										items: [{ price: 8 }],
									},
									{
										id: 2,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 3,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 4,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 5,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 6,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 7,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
								]}
								categoryId={1}
							/>

							<ProductsListGroup
								title='Combo'
								items={[
									{
										id: 1,
										name: "Margherita",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif",
										items: [{ price: 8 }],
									},
									{
										id: 2,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 3,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 4,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 5,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 6,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
									{
										id: 7,
										name: "Pepperoni",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0199b8e98ec871ab8a443887a3e1a136.avif",
										items: [{ price: 10 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}


03:11:45