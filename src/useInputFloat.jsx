/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 06:19:25 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState } from 'react';

export const useInputFloat = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const reset = () => setValue(initialValue);

	const bind = {
		value,
		onChange: (e) => {
			setValue(parseFloat(e.target.value));
		}
	};

	return [value, bind, reset];
};

export default useInputFloat;
