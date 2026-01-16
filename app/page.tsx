import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
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
				<div className='flex gap-[60]'>
					{/* Filter */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* product list */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductCard
								id={0}
								name='Cheeseburger pizza'
								price={550}
								imageUrl='https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif'
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

01:59:15