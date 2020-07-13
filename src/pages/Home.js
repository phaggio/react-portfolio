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
			<Container other="pt-4">
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

					<Col size="12">
						<div>
							<h2 className="text-center">Going Forward</h2>
							<p>{content.goingForward}</p>
							<hr />
						</div>
					</Col>

					<Col size="12">
						<div>
							<h2 className="text-center">Skills</h2>
							<br />
						</div>
					</Col>

					<Col size="12 md-4">
						<div className="d-flex flex-column align-items-center">
							<h4 className="text-center text-md-left w-100">Languages</h4>
							<ul className="list-group list-group-flush w-100">
								{content.languages.map(lang =>
									<li className="list-group-item text-center text-md-left" key={lang.name}>
										<i className={`${lang.icon} mr-2`} />
										{lang.name}
									</li>
								)}
							</ul>
							<hr />
						</div>
					</Col>
					<Col size="12 md-4">
						<div className="d-flex flex-column align-items-center">
							<h4 className="text-center text-md-left w-100">Tools</h4>
							<ul className="list-group list-group-flush w-100">
								{content.tools.map(tool =>
									<li className="list-group-item text-center text-md-left" key={tool.name}>
										<i className={`${tool.icon} mr-2`} />
										{tool.name}
									</li>
								)}
							</ul>
							<hr />
						</div>
					</Col>
					<Col size="12 md-4">
						<div className="d-flex flex-column align-items-center">
							<h4 className="text-center text-md-left w-100">Framework/Libraries</h4>
							<ul className="list-group list-group-flush w-100">
								{content.libraries.map(lib =>
									<li className="list-group-item text-center text-md-left" key={lib.name}>
										<i className={`${lib.icon} mr-2`} />
										{lib.name}
									</li>
								)}
							</ul>
							<hr />
						</div>
					</Col>

				</Row>
			</Container>
		</div>
	)
}
export default Home;