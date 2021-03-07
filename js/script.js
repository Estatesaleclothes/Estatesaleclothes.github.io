window.addEventListener("DOMContentLoaded", () => {
	document.onkeydown = function (e) {
		if (e.code === 'Enter') {
			document.activeElement.click();
		}
	};

	document.getElementById("instagramLink").onclick = () => {
		if (!window.google_error) {
			getOutboundLink("https://www.instagram.com/estatesaleclothes/");
			return false;
		}
	};

	document.getElementById("facebookLink").onclick = () => {
		if (!window.google_error) {
			getOutboundLink("https://www.facebook.com/estatesaleclothes/");
			return false;
		}
	};

	document.getElementById("depopLink").onclick = () => {
		if (!window.google_error) {
			getOutboundLink("https://www.depop.com/toastymallows/");
			return false;
		}
	};

	document.getElementById("poshmarkLink").onclick = () => {
		if (!window.google_error) {
			getOutboundLink("https://poshmark.com/closet/toastymallows");
			return false;
		}
	};

	document.getElementById("discogsLink").onclick = () => {
		if (!window.google_error) {
			getOutboundLink("https://www.discogs.com/seller/toastymallows/profile");
			return false;
		}
	}

	let emailLinks = document.getElementsByClassName("email-link");

	for (let i = 0; i < emailLinks.length; i++) {
		const emailLink = emailLinks[i];

		emailLink.onclick = () => {
			if (!window.google_error) {
				getOutboundLink("mailto:hello@estatesaleclothes.com?subject=Hello!");
				return false;
			}
		};
	}
});
