<Route path='/:handle' component={Profile} />

// tylermcginnis

class Profile extends React.component {
	componentDidMount() {
		const { handle } = this..props.match.params

		fetch(`https://api.twitter.com/user/${handle}`)
			.then()
	}


	render() {
		return (

		)
	}
}




// another example

<Link to={{
	pathname: '/tylermcginnis',
	state: {
		fromNotifications: true
	}
}}>
	Tyler McGinnis
</Link>

// Profile.js
class Profile extends React.component {
	componentDidMount () {
		const { handle } = this.props.match.params
		const { fromNotifications } = this.props.location.state	
	}
	render() {

	}
}