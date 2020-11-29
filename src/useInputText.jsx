/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 06:13:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState } from 'react';

export const useInputText = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const reset = () => setValue(initialValue);

	const bind = {
		value,
		onChange: (e) => {
			setValue(e.target.value);
		}
	};

	return [value, bind, reset];
};

export default useInputText;
