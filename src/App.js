import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts

import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
				<Navigation  />
				<ProductContext.Provider value={{products, addItem}}>
				{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</ProductContext.Provider>	
			</CartContext.Provider>
		</div>
	);
}

export default App;
