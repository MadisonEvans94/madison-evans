import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import LayoutGrid from "./Components/LayoutGrid/LayoutGrid";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import image1 from "./assets/images/w1.jpeg";
import image2 from "./assets/images/w2.jpeg";
import image3 from "./assets/images/w3.jpeg";
import Modal from "./Components/Modal/Modal";
import sampleVid from "./assets/palette.mp4";
import { useState } from "react";
import ModalContext from "./helpers/ModalContext";
import ProjectGroupContainer from "./Components/ProjectGroupContainer/ProjectGroupContainer";

const project1Content = {
	title: "Palette Pal",
	description:
		"Palette pal is a really cool app. I'm pretty proud of it, therefore, I'm taking this time to make a dummy description for a modal I'm making. In the real thing, this text will actually be meaningful, but rn, I'm just using it to fill out some space and allow me to see how things will eventually be layed out... so... yeah... Here I am. just filling out space. you know me. the usual. lol. asdf. asdf asdf asdf  fjasld;gk; asd;gjkas llaskjdhg laskdh lkajshdglakjshd lgjkashd lgkjhasldkgjhalsdk ga  alskjdgh laksjdgh lkajshdg jkashd glkajsh dglkjahsd lgjkl  s",
	video: sampleVid,
	githubLink: "https://github.com/MadisonEvans94/",
	siteLink: "https://palettepal.herokuapp.com/",
};
function App() {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	return (
		<div className="h-full">
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				modalContent={modalContent}
			/>
			<LayoutGrid
				nav={<Navbar />}
				content={
					<div className="flex-col w-full">
						{/* about me section */}
						<AboutMe />
						{/* Skills */}
						<Skills />
						{/* experience section */}
						<Experience />
						{/* Projects section */}
						<ModalContext.Provider value={{ modalContent, setModalContent }}>
							<ProjectGroupContainer>
								<Project
									image={image1}
									setShowModal={setShowModal}
									showModal={showModal}
									projectContent={project1Content}
								/>
								<Project
									image={image2}
									setShowModal={setShowModal}
									showModal={showModal}
									projectContent={project1Content}
								/>
								<Project
									image={image3}
									setShowModal={setShowModal}
									showModal={showModal}
									projectContent={project1Content}
								/>
							</ProjectGroupContainer>
						</ModalContext.Provider>
						{/* contact */}
						<Contact />
					</div>
				}
			/>
		</div>
	);
}

export default App;
