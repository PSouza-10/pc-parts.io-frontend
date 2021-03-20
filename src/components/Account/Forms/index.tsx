import { Settings } from './Settings'
import { MySales } from './MySales'

interface Options {
	[x: string]: JSX.Element
}

export const Forms: Options = {
	minhas_vendas: <MySales />,
	configuracoes: <Settings />,
	logout: <h1> Logout </h1>,
}
