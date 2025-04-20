import { useEffect } from "react";

export default function useClickHandler(reference: any, handler: any) {
	useEffect(() => {
		const cb = (e: any) => {
			if (!reference.current?.contains(e.target)) {
				handler();
			}
		};

		document.addEventListener("click", cb);
		return () => {
			document.removeEventListener("click", cb);
		};
	}, [reference, handler]);
}
