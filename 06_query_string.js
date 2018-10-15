// get information from Coinranking

// App.js

<Route path='/' component={Dashboard} />


//  Dashboard.js
import queryString from 'query-string' 

class Dashboard extends Component {
	componentDidMount() {
		const values = queryString.parse(this.props.location.search)
		fetchDashboardData(values.sorton)
	}




	render() {
		return (

		)
	}
}