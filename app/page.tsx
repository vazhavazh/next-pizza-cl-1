import { Container } from "@/components/shared/container";
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
			
		</>
	);
}

01:04:20