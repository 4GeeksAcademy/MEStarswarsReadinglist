import React, { useState } from 'react';

export const FavContext = React.createContext(null);
 
export const FavWrapper = (props) => {
	const [ store, setStore ] = useState({
		favorites: []
	});
	const [ actions ] = useState({
		addFav: (entity) => setStore({ ...store, favorites: store.favorites.concat(entity) })
	});
	
	return (
		<FavContext.Provider value={{ store, actions }}>
			{props.children}
		</FavContext.Provider>
	);
}

