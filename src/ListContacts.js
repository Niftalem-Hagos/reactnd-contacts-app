import React, { Component } from 'react'

class ListContacts extends Component {
	// decribe the UI of our component
	render() {
		//console.log('Props', this.props)
		console.log('Props', this.props)
		return (
			<ol className='contact-list'>
				{this.props.contacts.map((contact) => (
					<li key={contact.id} className='contact-list-item'>
					<dir 
						className='conntact-avatar'
						style={{
							backgroundImage: 'url($contat.avatarURL})'
						}}
						</div>
					</li>
					))}
			</ol>

			)
	}
}

export default ListContacts