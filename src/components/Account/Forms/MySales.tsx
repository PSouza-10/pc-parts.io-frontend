const sales = [
	{
		name: 'Meu coordenador',
		value: -500000,
		unidades: 100,
	},
	{
		name: 'Minha irmã',
		value: -500000,
		unidades: 100,
	},
	{
		name: 'Macaco disléxico',
		value: -500000,
		unidades: 100,
	},
	{
		name: 'Pólvora branca que com certeza não é cocaína',
		value: -500000,
		unidades: 100,
	},
]

export const MySales = () => {
	return (
		<>
			<h1>Minhas Vendas</h1>
			<div className='sales'>
				{sales.map(({ name, unidades, value }) => (
					<span>
						<h2>{name}</h2>
						<h3>Valor: {value}</h3>
						<h3>Unidades: {unidades}</h3>
					</span>
				))}
			</div>
		</>
	)
}
