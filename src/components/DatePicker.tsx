import {LegacyRef, forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';
import _DatePicker, {ReactDatePickerProps, registerLocale} from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

interface datePickerProps extends ReactDatePickerProps {
	error?: boolean;
	errorMessage?: string;
}

function DatePickerdatePicker({className, error, errorMessage, ...props}: datePickerProps, ref: LegacyRef<HTMLInputElement> | undefined) {
	const datePickerClassName = twMerge(className, 'rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-dark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary', error ? 'border-red-500' : '');

	return (
		<div className="flex w-full flex-col">
			<_DatePicker locale="pt-BR" wrapperClassName="w-full" className={datePickerClassName} enableTabLoop={false} {...props} />
			{error && errorMessage && <div className="mt-1 text-xs text-red-500">{errorMessage}</div>}
		</div>
	);
}

export default forwardRef(DatePickerdatePicker);
