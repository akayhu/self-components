import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './card';
import readme from './readme.md';
import { data } from './cardData';

const card = storiesOf('UI Components|小名片', module);

card
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add(
		'<Card> 小名片',
		() => (
			<div style={{ width: '300px' }}>
				<Card
					key={data[0].index}
					link={data[0].link}
					linkTitle={data[0].linkTitle}
					userImage={data[0].userImage}
					bgImage={data[0].bgImage}
					userName={data[0].userName}
					introduction={data[0].introduction}
				/>
			</div>
		),
		{
			notes: { markdown: readme },
		}
	)
	.add(
		'<Card> 小名片列表',
		() => (
			<div
				style={{
					flexWrap: 'wrap',
					display: 'flex',
					alignContent: 'flex-start',
					width: '100%',
				}}
			>
				{data.map((data, index) => (
					<Card
						key={index}
						link={data.link}
						linkTitle={data.linkTitle}
						userImage={data.userImage}
						bgImage={data.bgImage}
						userName={data.userName}
						introduction={data.introduction}
					/>
				))}
			</div>
		),
		{
			notes: { markdown: readme },
		}
	);
