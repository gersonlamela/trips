'use client';

import {ReactNode} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToasProvider({children}: {children: ReactNode}) {
	return (
		<>
			{children}
			<ToastContainer />
		</>
	);
}
