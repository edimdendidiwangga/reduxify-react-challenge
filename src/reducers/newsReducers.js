const initialState = []

const ArticleReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_ARTICLES': {
			let newState = [...payload]
			return newState
		}
		default: return state
	}

}

export default ArticleReducer
