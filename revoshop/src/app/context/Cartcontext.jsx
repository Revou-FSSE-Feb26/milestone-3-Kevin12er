"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext()

export function CartProvider({children}) {

	const [cart, setCart] = useState([]) /*nilai yang bernilai null tapi dalam bentuk array aja*/


	useEffect(() => {
		const revoCart = localStorage.getItem('revoshop_cart');

		if (revoCart) {
			setCart(JSON.parse(revoCart));
		}
	}, [])


	const simpanKeStorage = (itemBaru) => {

    	setCart(itemBaru);
    	localStorage.setItem('revoshop_cart', JSON.stringify(itemBaru));
  	};


  	const addItem = (produk) => {
  		const produkisAvailable = cart.find((item) => item.id === produk.id);


  		if (produkisAvailable) {
  			const updateProduk = cart.map((item) => item.id === produk.id ? { ...item, quantity: item.quantity + 1 } : item);
  			simpanKeStorage(updateProduk)
  		} else {
  			const updateCart = [...cart, {...produk, quantity: 1 }];
  			simpanKeStorage(updateCart);
  		}
  	};




  		const hapusDariKeranjang = (idProduk) => {
    	const updateCart = cart.filter((item) => item.id !== idProduk);
    		simpanKeStorage(updateCart);
  		}

  		  const kosongkanKeranjang = () => {
    		simpanKeStorage([]);
  		};



	return (
		<CartContext.Provider value={{cart, addItem, hapusDariKeranjang, kosongkanKeranjang}}>
			{children}
		</CartContext.Provider>
		)
	}
	
	export function useCart() {
	return useContext(CartContext)
	}