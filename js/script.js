window.addEventListener("DOMContentLoaded", () => {
	document.onkeydown = function (e) {
		if (e.keyCode === 13) {
			document.activeElement.click();
		}
	};

	document.getElementById("instagramLink").onclick = () => {
		getOutboundLink("https://www.instagram.com/estatesaleclothes/");
		return false;
	};

	document.getElementById("facebookLink").onclick = () => {
		getOutboundLink("https://www.facebook.com/estatesaleclothes/");
		return false;
	};

	document.getElementById("depopLink").onclick = () => {
		getOutboundLink("https://www.depop.com/toastymallows/");
		return false;
	};

	document.getElementById("poshmarkLink").onclick = () => {
		getOutboundLink("https://poshmark.com/closet/toastymallows");
		return false;
	};

	let emailLinks = document.getElementsByClassName("email-link");

	for (let i = 0; i < emailLinks.length; i++) {
		const emailLink = emailLinks[i];

		emailLink.onclick = () => {
			getOutboundLink("mailto:hello@estatesaleclothes.com?subject=Hello!");
			return false;
		};
	}
});
