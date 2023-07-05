'use client';

import {signIn, signOut, useSession} from 'next-auth/react';

export default function Home() {
	return (
		<div>
			<h1>Hello World!!!</h1>
		</div>
	);
}
