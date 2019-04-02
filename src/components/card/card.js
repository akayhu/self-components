import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component {
	render() {
		const {
			link,
			linkTitle,
			defultUserImage,
			defultBgImage,
			userName,
			userImage,
			bgImage,
			introduction,
		} = this.props;

		return (
			<div className="card-main">
				<a
					href={link}
					title={linkTitle}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="card-bg">
						<img src={bgImage || defultBgImage} alt="cover" />
						<div className="cardAvatar">
							<img src={userImage || defultUserImage} alt="Avatar" />
						</div>
					</div>
					<div className="card-content">
						<div className="username">{userName || '使用者名稱'}</div>
						<hr className="top" />
						<p
							className="summary"
							dangerouslySetInnerHTML={{ __html: introduction }}
						/>
					</div>
				</a>
			</div>
		);
	}
}

Card.propTypes = {
	link: PropTypes.string,
	linkTitle: PropTypes.string,
	defultUserImage: PropTypes.string,
	defultBgImage: PropTypes.string,
	userName: PropTypes.string.isRequired,
	userImage: PropTypes.string,
	bgImage: PropTypes.string,
	introduction: PropTypes.string.isRequired,
};

export default Card;
