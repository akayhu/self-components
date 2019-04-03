import React, { Component } from 'react';
import { NavDiv, Button, Hr } from '../styled';

class NavButton extends Component {
	render() {
		const { chanckFilterFunc } = this.props;
		return (
			<NavDiv>
				<Button all onClick={() => chanckFilterFunc('all')}>
					全顯示
				</Button>
				<Button completed onClick={() => chanckFilterFunc('completed')}>
					顯示勾選
				</Button>
				<Button unCompleted onClick={() => chanckFilterFunc('unCompleted')}>
					顯示未勾選
				</Button>
				<Hr />
			</NavDiv>
		);
	}
}

export default NavButton;
