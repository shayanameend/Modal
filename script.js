const discountNumbers = [10, 23, 40, 55, 77, 89, 92];
const numberContainer = document.getElementById("discountNumbers");
const modalOverlay = document.getElementById("discountOverlay");
const modal = document.getElementById("discountModal");
const closeBtn = document.getElementById("discountCloseBtn");
const copyBtn = document.getElementById("discountCopyBtn");
const copyFeedback = document.getElementById("discountCopyFeedback");
let isSpinning = false;
let currentDiscount = null;

const createDiscountNumbers = () => {
	numberContainer.innerHTML = "";
	discountNumbers.forEach((num, index) => {
		const numberDiv = document.createElement("div");
		numberDiv.className = "discount-number";
		numberDiv.textContent = `${num}%`;
		numberDiv.style.transform = `translateY(${index * 100}px)`;
		numberContainer.appendChild(numberDiv);
	});
};

const spinDiscountWheel = () => {
	if (isSpinning) return;
	isSpinning = true;

	let currentPosition = 0;
	let speed = 30;
	const acceleration = 1;
	const maxSpeed = 50;
	const duration = 3000;
	const startTime = Date.now();

	const spin = () => {
		const currentTime = Date.now();
		const elapsed = currentTime - startTime;

		if (elapsed < duration * 0.7) {
			speed = Math.min(maxSpeed, speed + acceleration);
		} else {
			speed = Math.max(5, speed * 0.95);
		}

		currentPosition -= speed;

		if (Math.abs(currentPosition) >= discountNumbers.length * 100) {
			currentPosition = 0;
		}

		numberContainer.style.transform = `translateY(${currentPosition}px)`;

		if (elapsed < duration) {
			requestAnimationFrame(spin);
		} else {
			const randomIndex = Math.floor(Math.random() * discountNumbers.length);
			const finalPosition = -randomIndex * 100;
			currentDiscount = discountNumbers[randomIndex];

			numberContainer.style.transition =
				"transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
			numberContainer.style.transform = `translateY(${finalPosition}px)`;

			setTimeout(() => {
				numberContainer.style.transition = "";
				isSpinning = false;
			}, 500);
		}
	};

	numberContainer.style.transition = "";
	requestAnimationFrame(spin);
};

const closeDiscountModal = () => {
	modalOverlay.classList.remove("active");
	modal.classList.remove("active");
};

const copyDiscountCode = async () => {
	try {
		await navigator.clipboard.writeText("RuXVDHMp");
		copyFeedback.classList.add("show");
		setTimeout(() => {
			copyFeedback.classList.remove("show");
		}, 2000);
	} catch (err) {
		console.error("Failed to copy discount code:", err);
	}
};

closeBtn.addEventListener("click", closeDiscountModal);
copyBtn.addEventListener("click", copyDiscountCode);
modalOverlay.addEventListener("click", (e) => {
	if (e.target === modalOverlay) {
		closeDiscountModal();
	}
});

window.addEventListener("load", () => {
	createDiscountNumbers();

	setTimeout(() => {
		modalOverlay.classList.add("active");
		modal.classList.add("active");

		setTimeout(spinDiscountWheel, 500);
	}, 300);
});
