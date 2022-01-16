const redux = require('redux')


const initialState={
	counter: 0
}
//Reducer
const reducer= (state = initialState,action)=>{

	if(action.type === 'ADD'){
		return{
			counter: state.counter +1 
		}
	}
	if (action.type === 'SUB') {
		return {
			counter: state.counter - 1
		}
	}
	if (action.type === 'ADD_NUBMER') {
		return {
			counter: state.counter + action.value
		}
	}
	return state

}

//Store
const store = redux.createStore(reducer)
store.subscribe(()=>{
	console.log('Sub', store.getState())
})

//Action
const addCounter ={
	type: 'ADD'
}

store.dispatch(addCounter)


store.dispatch({ type: 'SUB'})


store.dispatch({ type: 'ADD_NUBMER',value:10 })
