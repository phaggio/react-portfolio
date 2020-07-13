import React from 'react';
import aboutMe from '../json/about-me.json';
import { Col, Row, Container } from '../components/Grid';

const githubDir = `/react-portfolio`;
const style = {
	maxHeight: "100%",
	width: "100%"
}

const Home = () => {
	const content = aboutMe ? aboutMe[0] : {};
	return (
		<div>
			<Container>
				<Row>
					<Col size="12 md-6 lg-6" other="d-flex justify-content-center">
						<div>
							<img className="py-2" alt="profile" src={`${githubDir}/assets/images/profile.jpeg`} style={style} />
						</div>
					</Col>
					<Col size="12 md-6 lg-6" other="d-flex flex-column align-items-center">
						<div>
							<h2 className="text-center">About Me</h2>
							<p className="text-justify">{content.aboutMe}</p>
							<hr />
						</div>

						<div>
							<h2 className="text-center">Background</h2>
							<p className="text-justify">{content.background1}</p>

						</div>
					</Col>

					<Col size="12">
						<div className="mt-2">
							<p className="text-justify">{content.background2}</p>
							<hr />
						</div>
					</Col>




				</Row>
			</Container>

		</div>
	)
}
export default Home;