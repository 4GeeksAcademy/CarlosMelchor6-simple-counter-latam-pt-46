import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ContainerTime } from "./ContainerTime";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="bg-dark mt-5 d-flex justify-content-center align-items-center mx-auto"
					style={{ height: "25vh", maxWidth: "90vw", borderRadius: "2vh" }}>
					<div className="d-flex justify-content-center">
						<ContainerTime/>
						<ContainerTime/>
						<ContainerTime/>
						<ContainerTime/>
						<ContainerTime/>
						<ContainerTime/>
						<ContainerTime/>
					</div>
				</div>
			</div>
		</div>

	);
};

