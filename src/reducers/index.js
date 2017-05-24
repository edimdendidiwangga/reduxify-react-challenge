import { combineReducers } from 'redux'
import newsReducers from './newsReducers'

const rootReducers = combineReducers({
	news : newsReducers
})

export default rootReducers
