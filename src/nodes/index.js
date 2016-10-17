import inputs from './inputs'
import processors from './processors'
import outputs from './outputs'

const nodes = {
	...inputs,
	...processors,
	...outputs,
	...shared
}

export default nodes