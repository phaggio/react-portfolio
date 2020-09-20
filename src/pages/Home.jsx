import React from 'react';
import TechListItem from '../components/TechListItem';
import aboutMe from '../json/about-me.json';

const githubDir = `/react-portfolio`;
const style = {
	maxHeight: "30%",
	width: "30%%"
}

const Home = () => {
	const content = aboutMe ? aboutMe[0] : {};
	return (
		<div className="container pb-5">
			<div className="row pb-5">


				<div className="col-12 col-md-6">
					<div className="d-flex justify-content-center mt-2">
						<img className="rounded-circle py-2" alt="profile"
							src={`${githubDir}/assets/images/profile.jpeg`} style={style} />
					</div>
				</div>

				<div className="col-12 col-md-6">
					<div className="d-flex flex-column mt-2">
						<div className="text-center display-4">Richard Wang</div>
						<div className="py-2">
							<div className="text-center py-2">
								<p>Product Manger | Web Developer</p>
							</div>
							<div className="pt-2">
								<p className="text-justify">{content.background1}</p>
								<p className="text-justify">{content.background2}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12">
					<div className="d-flex justify-content-center">
						<label className="h4">Skills</label>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<div className="d-flex flex-column align-items-center p-2 shadow rounded">
						<label className="text-center text-md-left font-weight-light">Languages</label>
						<ul className="list-group list-group-flush w-100">
							{content.languages.map(lang =>
								<TechListItem key={lang.name} type={lang.type} icon={lang.icon} name={lang.name} />
							)}
						</ul>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<div className="d-flex flex-column align-items-center p-2 shadow rounded">
						<label className="text-center text-md-left font-weight-light">Tools</label>
						<ul className="list-group list-group-flush w-100">
							{content.tools.map(tool =>
								<TechListItem key={tool.name} type={tool.type} icon={tool.icon} name={tool.name} />
							)}
						</ul>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<div className="d-flex flex-column align-items-center p-2 shadow rounded ">

						<label className="text-center text-md-left font-weight-light">Framework/Libraries</label>
						<ul className="list-group list-group-flush w-100">
							{content.libraries.map(lib =>
								<TechListItem key={lib.name} type={lib.type} icon={lib.icon} name={lib.name} />
							)}
						</ul>
					</div>

				</div>


			</div>
		</div>
	)
}
export default Home;