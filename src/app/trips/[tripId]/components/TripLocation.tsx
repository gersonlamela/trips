import Button from '@/components/Button';
import Image from 'next/image';

interface TripLocationProps {
	location: string;
	locationDescription: string;
}

export function TripLocation({location, locationDescription}: TripLocationProps) {
	return (
		<div className="p-5">
			<h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
			<div className="relative h-[250px] w-full">
				<Image src="/map-mobile.png" alt={location} style={{objectFit: 'cover'}} className="rounded-lg shadow-md" fill />
			</div>

			<h3 className="text-primaryDarker text-sm font-semibold mt-3">{location}</h3>
			<p className="text-xs text-primaryDarker mt-2 text-justify leading-5">{locationDescription}</p>

			<Button variant="outlined" className="w-full mt-5">
				Ver no Google Maps
			</Button>
		</div>
	);
}
