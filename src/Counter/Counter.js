
import { number } from 'prop-types';
import React  from 'react';
import { connect} from 'react-redux'


class Counter extends React.Component{


	render(){
		console.log('APP',this.props)
		return(
			<div>
			<h2 >Counter {this.props.counter}</h2>
			<button  onClick={this.props.onAdd}>+</button>
			<button  onClick={this.props.onSub}>-</button>	
			<button  onClick={() =>this.props.onAddNumber(15)}>Число</button>
			</div>
		)
	}
}
function mapStateToProps(state){
	return{
		counter: state.counter
	}

}

function mapDispatchToProps(dispath){
	return {
		onAdd: ()=> dispath({type: 'ADD'}),
		onSub: ()=> dispath({type: 'SUB'}),
		onAddNumber: number => dispath({type: 'ADD_NUMBER', payload: number})
	}

}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)