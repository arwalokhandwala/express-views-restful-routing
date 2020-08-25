const React=require('React');

class Form extends React.Component {
	render(){
		let { id } =this.props
		return (
			<form method="POST" action={`/pokemon/${id}?_method=put`}>
				Pokemon Name - <input type="text" name="pokemonName"/>
				<br/>
				Pokemon Height - <input type="text" name="pokemonHeight"/>
					<br/>
				<input type="submit" value="Submit"/>
			</form>
			)
	}
}
module.exports=Form
