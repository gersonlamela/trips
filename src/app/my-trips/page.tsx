'use client';

import {getServerSession} from 'next-auth';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

import {TripReservation} from '@prisma/client';

export default function MyTrips() {
	const {status, data} = useSession();

	const [reservations, setReservations] = useState<TripReservation[]>([]);

	const router = useRouter();

	useEffect(() => {
		if (status === 'unauthenticated' || !data?.user) {
			return router.push('/');
		}

		const fetchReservations = async () => {
			const response = await fetch(`http://localhost:3000/api/user/${(data?.user as any).id}/reservations`);
			const json = await response.json();

			setReservations(json);
		};

		fetchReservations();
	}, [status, data?.user, router]);

	console.log(reservations);

	return <h1></h1>;
}
