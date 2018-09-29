import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

import './CheckList.css';

class CheckList extends Component {
	render() {
		const items = [
			{
				name: 'facebook',
				icon: 'facebook',
				description: 'follow our facebook page',
				link: 'https://www.facebook.com/SoDAASU/'
			},
			{
				name: 'twitter',
				icon: 'twitter',
				description: 'follow us on twitter',
				link: 'https://www.twitter.com/asu_soda'
			},
			{
				name: 'instagram',
				icon: 'instagram',
				description: 'follow us on instagram',
				link: 'https://www.instagram.com/asu_soda/'
			},
			{
				name: 'calendar',
				icon: 'calendar outline',
				description: 'view our monthly calendar',
				link: 'https://www.instagram.com/asu_soda/'
			},
			{
				name: 'slack',
				icon: 'slack',
				description: 'join our slack team',
				link: 'https://www.sodaasu.slack.com'
			},
			{
				name: 'youtube',
				icon: 'youtube',
				description: 'subscribe to our youtube channel',
				link: 'https://www.youtube.com/sodaasu'
			},
			{
				name: 'github',
				icon: 'github',
				description: 'view our github projects',
				link: 'https://www.github.com/asusoda'
			},
			{
				name: 'newsletter',
				icon: 'mail',
				description: 'subscribe to our newsletter',
				link: 'https://www.tinyurl.com/sodanews'
			},
			{
				name: 'orgsync',
				icon: 'redo',
				description: 'register as a SoDer on OrgSync',
				link: 'https://www.orgsync.com/12637/chapter'
			}
		]

		return (
			<Card fluid id="checklist" header="New to SoDA?"
				description={
					items.map(({name, icon, description, link}) =>
						<span id="checklistItem">
							<a href={link} target="blank">
								<Icon name={icon} size='large' id={name}/> {description}
							</a>
						</span>
					)}
			/>
		);
	}
}

export default CheckList;