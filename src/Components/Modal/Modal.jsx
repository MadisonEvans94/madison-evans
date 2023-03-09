import React from "react";
import { CgClose } from "react-icons/cg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Modal = ({ showModal, setShowModal, modalContent }) => {
	console.log(showModal);
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	if (showModal) {
		return (
			<div className="fixed w-screen h-screen bg-opacity-80 flex bg-black z-10 items-center">
				<div
					style={{ backgroundColor: "#111111", maxWidth: "50em" }}
					className="text-white relative border rounded w-4/5 mx-auto mt-1/2 h-3/5 parent">
					<button
						onClick={toggleModal}
						className="absolute text-white top-0 right-0 mr-4 mt-4">
						<CgClose size="4em" />
					</button>
					<h1 className="div1 text-6xl text-center flex justify-center items-center">
						Palette Pal
					</h1>
					<div className="div2 py-2">
						<VideoPlayer videoSource={modalContent.video} />
					</div>
					<p className="div3 overflow-y-auto px-4 my-3">
						{modalContent.description}
					</p>

					<ul className="div4 flex flex-col h-full w-full justify-center px-4">
						<li>Explore the github repo</li>
						<li>
							Visit the site{" "}
							<strong>
								<a
									href={modalContent.siteLink}
									target="_blank"
									rel="noreferrer">
									here
								</a>
							</strong>
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
