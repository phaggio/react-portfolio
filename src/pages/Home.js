import React from 'react';
import aboutMe from '../json/about-me.json';

const githubDir = `/react-portfolio`;
const style = {
	maxHeight: "30%",
	width: "30%%"
}

const Home = () => {
	const content = aboutMe ? aboutMe[0] : {};
	return (
		<div className="container">
			<div className="row">


				<div className="col-12 col-md-6">
					<div className="d-flex justify-content-center mt-2">
						<img className="rounded-circle py-2" alt="profile"
							src={`${githubDir}/assets/images/profile.jpeg`} style={style} />
					</div>
				</div>

				<div className="col-12 col-md-6">
					<div className="d-flex flex-column mt-2">
						<h2 className="text-center">About Me</h2>
						<p className="text-justify">{content.aboutMe}</p>
						<p className="text-justify">{content.background1}</p>
						<p className="text-justify">{content.background2}</p>
					</div>
				</div>

				<div className="col-12">
					<h2 className="text-center">Skills</h2>
				</div>

				<div className="col-12 col-md-4">
					<div className="d-flex flex-column align-items-center mt-2">
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
				</div>

				<div className="col-12 col-md-4">
					<div className="d-flex flex-column align-items-center mt-2">
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
				</div>

				<div className="col-12 col-md-4">
					<div className="d-flex flex-column align-items-center mt-2 mb-4 pb-4">
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
				</div>



			</div>
		</div>
	)
}
export default Home;