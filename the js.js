var sellPrice;

setPrice();

function setPrice() {
    sellPrice = prompt("What price would you like to automatically alert you at?");
    if (!isNaN(parseFloat(sellPrice)) && isFinite(sellPrice)) {
        alert("Will now alert at $" + sellPrice);
    } else if (sellPrice === null) {
        return;
    } else {
        alert("Value is not a number.");
        setPrice();
    }
}

console.log(sellPrice);

const myElements = document.getElementsByClassName('main-chart-price');
if(window.addEventListener) {
	myElements[0].addEventListener('DOMSubtreeModified', contentChanged, false);
} else {
	if(window.attachEvent) {
		myElements[0].attachEvent('DOMSubtreeModified', contentChanged);
	}
}

currentPrice = myElements[0];

function showNotification() {
	console.log(Notification.permission);
    if (Notification.permission === "granted") {
		const notification = new Notification("New message incoming", {
			body: "Hi there. How are you doing?",
			icon: "https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png"
		})
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
			console.log(permission);
			if(permission === "granted") {
				const notification = new Notification("New message incoming", {
					body: "Hi there. How are you doing?",
					icon: "https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png"
				})
			}
        });
    }
}

function contentChanged() {
	console.log(currentPrice);
	if (currentPrice.textContent.includes(sellPrice)) {
		showNotification();
	}
}
