import React, { useState } from "react";

function Stepper({ steps }: { steps: any }) {
	const [currentStep, setCurrentStep] = useState(0);

	const handleContiue = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};
	return (
		<div className="stepper">
			<div>
				{steps.map(
					(
						{ label, content }: { label: string; content: string },
						index: number,
					) => {
						return (
							<div key={label} className="step-container ">
								<div
									className={`step-number ${
										index <= currentStep ? "active" : ""
									}`}
								>
									{index + 1}
									{index < steps.length - 1 && (
										<div
											className={`step-line ${
												index < currentStep ? "active" : ""
											}`}
										></div>
									)}
								</div>

								<div className="step-label">{label}</div>
							</div>
						);
					},
				)}
			</div>
			<div className="step-content">{steps[currentStep].content}</div>
			<div className="step-controller">
				<button className="step-button" onClick={handleBack}>
					Back
				</button>
				<button className="step-button" onClick={handleContiue}>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Stepper;
