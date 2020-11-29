/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 06:21:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState } from 'react';

export const useInputCheckBox = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const reset = () => setValue(initialValue);

	const bind = {
		checked: value,
		onChange: () => {
			setValue(!value);
		}
	};

	return [value, bind, reset];
};

export default useInputCheckBox;
