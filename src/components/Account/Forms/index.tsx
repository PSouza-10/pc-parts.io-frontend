import { Settings } from './Settings'

interface Options {
	[x: string]: JSX.Element
}

export const Forms: Options = {
	minhas_vendas: <h1> Minhas Vendas </h1>,
	configuracoes: <Settings />,
	logout: <h1> Logout </h1>,
}
