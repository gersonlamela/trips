import {prisma} from '@/lib/prisma';
import {NextResponse} from 'next/server';

export async function POST(request: Request) {
	const req = await request.json();

	const reservations = await prisma.tripReservation.findMany({
		where: {
			tripId: req.tripId,
			//verifica datas
			startDate: {
				lte: new Date(req.endDate),
			},
			endDate: {
				gte: new Date(req.startDate),
			},
		},
	});

	if (reservations.length > 0) {
		return new NextResponse(JSON.stringify({error: {code: 'Trip_Already_Reserved'}}));
	}

	return new NextResponse(JSON.stringify({success: true}));
}
