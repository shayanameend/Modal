const createDiscountModal = (customConfig = {}) => {
	// Default configuration with explicit styling for every element
	const config = {
		// Content
		initialValue: null,
		numbers: [],
		currencySymbol: null,
		title: null,
		description: null,
		preCode: null,
		couponCode: null,
		buttonText: null,
		buttonSubtext: null,
		imageUrl: null,

		// Modal Styling
		modalWidth: "85%",
		modalMaxWidth: "786px",
		modalBackground: "#fff",
		modalBorderRadius: "16px",
		modalPadding: "0px 0px 0px 0px",
		modalMargin: "0px 0px 0px 0px",

		// Overlay Styling
		overlayBackground: "rgba(0, 0, 0, 0.7)",
		overlayPadding: "20px 20px 20px 20px",
		overlayMargin: "0px 0px 0px 0px",

		// Close Button Styling
		closeBtnSize: "24px",
		closeBtnColor: "#333",
		closeBtnBackground: "transparent",
		closeBtnHoverBackground: "rgba(0, 0, 0, 0.1)",
		closeBtnPadding: "0px 0px 0px 0px",
		closeBtnMargin: "0px 0px 0px 0px",
		closeBtnFontWeight: "400",

		// Container Styling
		containerPadding: "0px 0px 0px 0px",
		containerMargin: "0px 0px 0px 0px",
		containerBackground: "transparent",

		// Left Container Styling
		leftContainerPadding: "0px 0px 0px 0px",
		leftContainerMargin: "0px 0px 0px 0px",
		leftContainerBackground: "transparent",

		// Right Container Styling
		rightContainerPadding: "32px 32px 32px 32px",
		rightContainerMargin: "0px 0px 0px 0px",
		rightContainerBackground: "transparent",

		// Image Styling
		imageMargin: "0px 0px 0px 0px",
		imagePadding: "0px 0px 0px 0px",
		imageBackground: "transparent",

		// Title Styling
		titleSize: "24px",
		titleColor: "#333",
		titleMargin: "0px 0px 18px 0px",
		titlePadding: "0px 0px 0px 0px",
		titleFontWeight: "700",
		titleBackground: "transparent",

		// Number Display Styling
		numberSize: "64px",
		numberColor: "#333",
		numberMargin: "0px 0px 0px 0px",
		numberPadding: "0px 0px 0px 0px",
		numberFontWeight: "700",
		numberBackground: "transparent",

		// Number Container Styling
		numberContainerMargin: "0px 0px 24px 0px",
		numberContainerPadding: "0px 0px 0px 0px",
		numberContainerBackground: "transparent",
		numberContainerHeight: "56px",

		// Description Styling
		descriptionSize: "12px",
		descriptionColor: "#999",
		descriptionMargin: "0px 0px 18px 0px",
		descriptionPadding: "0px 0px 0px 0px",
		descriptionFontWeight: "400",
		descriptionBackground: "transparent",

		// Code Styling
		codeBackground: "rgba(0, 0, 0, 0.1)",
		codePadding: "1px 5px 1px 5px",
		codeMargin: "4px 0px 0px 0px",
		codeFontSize: "12px",
		codeFontWeight: "400",
		codeColor: "#333",

		// Button Styling
		buttonBackground: "rgb(250, 170, 180)",
		buttonColor: "white",
		buttonPadding: "12px 24px 12px 24px",
		buttonMargin: "0px 0px 16px 0px",
		buttonSize: "16px",
		buttonFontWeight: "600",

		// Subtext Styling
		subtextSize: "10px",
		subtextColor: "#999",
		subtextMargin: "0px 0px 0px 0px",
		subtextPadding: "0px 0px 0px 0px",
		subtextFontWeight: "400",
		subtextBackground: "transparent",

		// Animation
		initialDelay: 300,
		spinDelay: 500,
		spinDuration: 3000,
		maxSpeed: 50,
		acceleration: 1,

		...customConfig,
	};

	const styles = `
    .discount-modal-overlay {
      align-items: center;
      background-color: ${config.overlayBackground};
      bottom: 0;
      display: flex;
      justify-content: center;
      left: 0;
      margin: ${config.overlayMargin};
      opacity: 0;
      padding: ${config.overlayPadding};
      position: fixed;
      right: 0;
      top: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 9999;
    }

    .discount-modal {
      background-color: ${config.modalBackground};
      border-radius: ${config.modalBorderRadius};
      box-shadow: 0 6px 28px rgba(0, 0, 0, 0.3);
      margin: ${config.modalMargin};
      max-width: ${config.modalMaxWidth};
      opacity: 0;
      overflow: hidden;
      padding: ${config.modalPadding};
      position: relative;
      text-align: center;
      transform: scale(0.7);
      transition: all 0.3s ease-in-out;
      width: ${config.modalWidth};
    }

    .discount-modal.active {
      opacity: 1;
      transform: scale(1);
    }

    .discount-modal-overlay.active {
      opacity: 1;
    }

    .discount-close-btn {
      align-items: center;
      border-radius: 50%;
      color: ${config.closeBtnColor};
      cursor: pointer;
      display: flex;
      font-size: ${config.closeBtnSize};
      font-weight: ${config.closeBtnFontWeight};
      height: 24px;
      justify-content: center;
      margin: ${config.closeBtnMargin};
      padding: ${config.closeBtnPadding};
      position: absolute;
      right: 12px;
      top: 12px;
      transition: background 0.3s ease;
      width: 24px;
    }

    .discount-modal-container {
      background-color: ${config.containerBackground};
      display: ${config.imageUrl ? "grid" : "block"};
      grid-template-columns: 1fr 1fr;
      margin: ${config.containerMargin};
      padding: ${config.containerPadding};
    }

    @media (max-width: 768px) {
      .discount-modal-container {
        display: block;
      }
    }

    .discount-modal-left {
      background-color: ${config.leftContainerBackground};
      display: none;
      margin: ${config.leftContainerMargin};
      padding: ${config.leftContainerPadding};
    }

    @media (min-width: 768px) {
      .discount-modal-left {
        display: ${config.imageUrl ? "block" : "none"};
      }
    }

    .discount-modal-right {
      background-color: ${config.rightContainerBackground};
      margin: ${config.rightContainerMargin};
      padding: ${config.rightContainerPadding};
    }

    .discount-img {
      background-color: ${config.imageBackground};
      height: 100%;
      margin: ${config.imageMargin};
      object-fit: cover;
      padding: ${config.imagePadding};
      width: 100%;
    }

    .discount-slot-machine {
      background-color: ${config.numberContainerBackground};
      font-size: ${config.numberSize};
      height: ${config.numberContainerHeight};
      margin: ${config.numberContainerMargin};
      overflow: hidden;
      padding: ${config.numberContainerPadding};
      position: relative;
    }

    .discount-number-container {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      transition: transform 0.1s ease-out;
      width: 100%;
    }

    .discount-number {
      align-items: center;
      background-color: ${config.numberBackground};
      color: ${config.numberColor};
      display: flex;
      font-size: ${config.numberSize};
      font-weight: ${config.numberFontWeight};
      height: 100px;
      justify-content: center;
      margin: ${config.numberMargin};
      padding: ${config.numberPadding};
      position: absolute;
      width: 100%;
    }

    .discount-title {
      background-color: ${config.titleBackground};
      color: ${config.titleColor};
      font-size: ${config.titleSize};
      font-weight: ${config.titleFontWeight};
      margin: ${config.titleMargin};
      padding: ${config.titlePadding};
      text-transform: uppercase;
    }

    .discount-description {
      background-color: ${config.descriptionBackground};
      color: ${config.descriptionColor};
      font-size: ${config.descriptionSize};
      font-weight: ${config.descriptionFontWeight};
      margin: ${config.descriptionMargin};
      padding: ${config.descriptionPadding};
      text-transform: uppercase;
      width: 100%;
    }

    .discount-code {
      background: ${config.codeBackground};
      border-radius: 6px;
      color: ${config.codeColor};
      display: inline-block;
      font-family: monospace;
      font-size: ${config.codeFontSize};
      font-weight: ${config.codeFontWeight};
      margin: ${config.codeMargin};
      padding: ${config.codePadding};
    }

    .discount-copy-btn {
      background: ${config.buttonBackground};
      border-radius: 5px;
      border: none;
      color: ${config.buttonColor};
      cursor: pointer;
      font-size: ${config.buttonSize};
      font-weight: ${config.buttonFontWeight};
      margin: ${config.buttonMargin};
      padding: ${config.buttonPadding};
      text-transform: uppercase;
      transition: background 0.3s ease;
    }

    .discount-copy-btn:hover {
      opacity: 0.9;
    }

    .discount-btn-description {
      background-color: ${config.subtextBackground};
      color: ${config.subtextColor};
      font-size: ${config.subtextSize};
      font-weight: ${config.subtextFontWeight};
      margin: ${config.subtextMargin};
      padding: ${config.subtextPadding};
      text-transform: uppercase;
      width: 100%;
    }
  `;

	const styleSheet = document.createElement("style");
	styleSheet.textContent = styles;
	document.head.appendChild(styleSheet);

	const modalHTML = `
    <div class="discount-modal-overlay" id="discountOverlay">
      <div class="discount-modal" id="discountModal">
        <div class="discount-close-btn" id="discountCloseBtn">&times;</div>
        <div class="discount-modal-container">
          <div class="discount-modal-left">
            <img src="${config.imageUrl}" alt="Discount Image" class="discount-img">
          </div>
          <div class="discount-modal-right">
            <h2 class="discount-title">${config.title}</h2>
            <div class="discount-slot-machine">
              <div class="discount-number-container" id="discountNumbers"></div>
            </div>
            <p class="discount-description">
              <span>${config.description}</span>
              <br />
              <span>${config.preCode} </span>
              <span class="discount-code">${config.couponCode}</span>
            </p>
            <button class="discount-copy-btn" id="discountCopyBtn">${config.buttonText}</button>
            <p class="discount-btn-description">${config.buttonSubtext}</p>
          </div>
        </div>
      </div>
    </div>
  `;

	document.body.insertAdjacentHTML("beforeend", modalHTML);

	const modalOverlay = document.getElementById("discountOverlay");
	const modal = document.getElementById("discountModal");
	const closeBtn = document.getElementById("discountCloseBtn");
	const copyBtn = document.getElementById("discountCopyBtn");
	const numberContainer = document.getElementById("discountNumbers");
	let isSpinning = false;

	const createDiscountNumbers = () => {
		numberContainer.innerHTML = "";
		config.numbers.forEach((num, index) => {
			const numberDiv = document.createElement("div");
			numberDiv.className = "discount-number";
			numberDiv.textContent = config.currencySymbol
				? `${config.currencySymbol}${config.initialValue || num}`
				: `${config.initialValue || num}%`;
			numberDiv.style.transform = `translateY(${index * 100}px)`;
			numberContainer.appendChild(numberDiv);
		});
	};

	const spinDiscountWheel = () => {
		if (config.initialValue) return;

		if (isSpinning) return;
		isSpinning = true;

		let currentPosition = 0;
		let speed = 30;
		const startTime = Date.now();

		const spin = () => {
			const currentTime = Date.now();
			const elapsed = currentTime - startTime;

			if (elapsed < config.spinDuration * 0.7) {
				speed = Math.min(config.maxSpeed, speed + config.acceleration);
			} else {
				speed = Math.max(5, speed * 0.95);
			}

			currentPosition -= speed;

			if (Math.abs(currentPosition) >= config.numbers.length * 100) {
				currentPosition = 0;
			}

			numberContainer.style.transform = `translateY(${currentPosition}px)`;

			if (elapsed < config.spinDuration) {
				requestAnimationFrame(spin);
			} else {
				const randomIndex = Math.floor(Math.random() * config.numbers.length);
				const finalPosition = -randomIndex * 100;

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
		modal.classList.remove("active");
		modalOverlay.classList.remove("active");
		modalOverlay.style.zIndex = "-1";
	};

	const copyDiscountCode = async () => {
		try {
			await navigator.clipboard.writeText(config.couponCode);
		} catch (err) {
			console.error("Failed to copy discount code:", err);
		}
	};

	const openDiscountModal = () => {
		createDiscountNumbers();
		setTimeout(() => {
			modalOverlay.style.zIndex = "9999";
			modalOverlay.classList.add("active");
			modal.classList.add("active");
			setTimeout(spinDiscountWheel, config.spinDelay);
		}, config.initialDelay);
	};

	closeBtn.addEventListener("click", closeDiscountModal);
	copyBtn.addEventListener("click", copyDiscountCode);
	modalOverlay.addEventListener("click", (e) => {
		if (e.target === modalOverlay) {
			closeDiscountModal();
		}
	});

	openDiscountModal();

	return {
		open: openDiscountModal,
		close: closeDiscountModal,
	};
};
