import React from "react"

import { Category } from "../components/ProductCategory"
import { BackgroundVideo } from "../components/BackgroundVideo"
import { SearchBar } from "../components/SearchBar"


const categories = [
	{
		imageSrc:
			"https://etstore.in/wp-content/uploads/2022/08/samwha-capacitor-105-degree-500x500-1.webp",
		name: "Capacitores",
		href: "products/capacitores?page=1&limit=30",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/ZI-D/609027fcc76f4.webp",
		name: "Baterías",
		href: "/products/baterías?page=1&limit=30",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/74245/606df4b2bde79.webp",
		name: "Circuitos Integrados",
		href: "/products/circuitos integrados",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/6A10/6116c1d08b684.webp",
		name: "Diodos",
		href: "/products/diodos",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/M28-600/608b33d44f6ae.webp",
		name: "Electromagnetismo",
		href: "/products/electromagnetismo",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/FIL3D-020NE/6039163c12086.webp",
		name: "Impresiones 3D",
		href: "/products/impresiones 3d",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/PB4P6X6/623b7c673d1f8.webp",
		name: "Interruptores",
		href: "/products/interruptores",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/DRV8833/612a7448ade7a.webp",
		name: "Módulos De Electrónica",
		href: "/products/módulos de electrónica",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/YXJ156/60391433a2adb.webp",
		name: "Motores",
		href: "/products/motores",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/LDROJ5/6039269450ca5.webp",
		name: "Optoelectrónica",
		href: "/products/optoelectrónica",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/CHA-19N/60d117bbb2130.webp",
		name: "Organizadores",
		href: "/products/organizadores",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/509-010/6039614e47324.webp",
		name: "Prototipado",
		href: "/products/prototipado",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/7912/6138e70b560b6.webp",
		name: "Reguladores De Tensión",
		href: "/products/reguladores de tensión",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/POT2K/60a81bf293f7f.webp",
		name: "Resistores",
		href: "/products/resistores",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/870-332/612d38896cc31.webp",
		name: "Sensores",
		href: "/products/sensores",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/ASMD/61240de760714.webp",
		name: "Tarjetas De Desarrollo",
		href: "/products/tarjetas de desarrollo",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/BTA16/615873c1227f2.webp",
		name: "Tiristores",
		href: "/products/tiristores",
	},
	{
		imageSrc:
			"https://mvelectronica.s3.us-east-2.amazonaws.com/productos/IRF740/606ddcac8a28f.webp",
		name: "Transistores",
		href: "/products/transistores",
	},
	{
		imageSrc:
			"https://geekelectronica.com/wp-content/uploads/2020/09/Componentes.jpg",
		name: "Ver todos los productos",
		href: "/products",
	},
]

	

export function CategoriesPage() {
	return (
		<>
			<BackgroundVideo />

			<header className="categories-header">
				<SearchBar/>
			</header>
			<section className="category-grid">
				{categories.map((category) => {
					return (
						<Category
							key={category.name}
							name={category.name}
							href={category.href}
							imageSrc={category.imageSrc}
						/>
					)
				})}
			</section>
		</>
	)
}

export default CategoriesPage
