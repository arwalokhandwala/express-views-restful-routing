const React= require("React")

class Read extends React.Component {
	render() {
		const { pokemon } = this.props
		const pokemonList = pokemon.map(item=>{
			return <h1>{item.name}</h1>
		})
		return (
				<div>
				Pokemon List 
				<br/>
				{pokemonList}
				</div>
			)
	}
}

module.exports=Read