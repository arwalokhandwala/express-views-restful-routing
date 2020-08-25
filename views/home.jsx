const React=require('react');

class Home extends React.Component {

	render(){

		let {name, number, hobbies }=this.props

		let hobbiesList = hobbies.map((item)=>{
			return <li>{item}</li>
		})
		// [
		//<li>Reading</li>,
		// <li>Dancing</li>,
		//<li>Cooking</li>,
		//]

		let message=`Hello World ${name}`;
		let noMessage=`Your number is ${number}`;
		

		if(name.length>5) {
			message="Welcome! what a long name"
		}

		if(number.split("-")[0]==="+65") {
			noMessage="Hey looks like it's a singapore number!!"
		}

		return (
			<html>
				<body>
					<div>
						<h1>{message}</h1>
						<h2>{noMessage}</h2>
					</div>
					<ul>
					{hobbiesList}
					</ul>
				</body>	
			</html>
			);
	}
}

module.exports=Home;