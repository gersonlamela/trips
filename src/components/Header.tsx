'use client';

import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

import {AiOutlineMenu} from 'react-icons/ai';

export function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const {status, data} = useSession();
	const handleLoginClick = () => signIn();
	const handleLogoutClick = () => {
		setMenuIsOpen(false);
		signOut();
	};

	const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

	return (
		<div className="container mx-auto p-5 py-0 h-[93px] w-full flex justify-between items-center  ">
			<Link href="/">
				<div className="relative h-[32px] w-[182px]">
					<Image src="/logo.png" alt="Logo" fill />
				</div>
			</Link>
			{status === 'unauthenticated' && (
				<button className="text-primary font-semibold text-sm" onClick={handleLoginClick}>
					Login
				</button>
			)}
			{status === 'authenticated' && data.user && (
				<div className="flex items-center gap-3 border-grayLighter p-2 px-3 border rounded-full border-solid relative">
					<AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer" />

					<Image src={data.user.image!} width={35} height={35} alt={data.user.name!} className="rounded-full shadow-md" />

					{menuIsOpen && (
						<div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
							<Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
								<button className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold">Minhas Viagens</button>
							</Link>
							<button className="text-primary  pt-2 text-sm font-semibold" onClick={handleLogoutClick}>
								Logout
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
