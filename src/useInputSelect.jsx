/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 06:22:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState } from 'react';

export const useInputSelect = (defaultSelectedValue) => {
	const [value, setValue] = useState(defaultSelectedValue);

	const reset = () => setValue(defaultSelectedValue);

	const bind = {
		value,
		onChange: (e) => {
			// setValue(e.target.value);
			setValue(e.target.options[e.target.options.selectedIndex].value);
		}
	};

	return [value, bind, reset];
};

export default useInputSelect;
