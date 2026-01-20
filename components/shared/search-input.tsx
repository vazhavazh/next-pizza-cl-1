"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway } from "react-use";

interface Props {
	className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [focused, setFocused] = React.useState(false);
	const ref = React.useRef<HTMLDivElement>(null);

	useClickAway(ref, () => {
		setFocused(false);
	});

	return (
		<>
			{focused && (
				<div className='fixed top-0 bottom-0 left-0 right-0 z-30 bg-black/50' />
			)}
			<div
				ref={ref}
				className={cn(
					"relative flex justify-between flex-1 rounded-2xl h-11 z-30",
					className,
				)}>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
				<input
					className='w-full bg-gray-100 outline-none rounded-2xl pl-11'
					type='text'
					placeholder='Search for pizza...'
					onFocus={() => setFocused(true)}
				/>

				<div
					className={cn(
						"absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
						focused && "visible opacity-100 top-12",
					)}>
					<Link
						className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10'
						href='/product/1'>
						<img
							width={32}
							height={32}
							className='rounded-sm'
							src='https://media.dodostatic.net/image/r:760x760/0198bf283b2372ea8e7cfc8adae9ea84.avif'
							alt='Pizza1'
						/>
						<span>Pizza 1</span>
					</Link>
				</div>
			</div>
		</>
	);
};
