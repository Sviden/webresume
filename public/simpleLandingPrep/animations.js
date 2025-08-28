gsap.registerPlugin(SplitText);

(() => {
  // Create the SplitText instance
  const split = SplitText.create(".title, .subtitle", {
    type: "chars",
    mask: "lines",
    autoSplit: true,
  });

  // Create a timeline for better control and sequencing
  const tl = gsap.timeline({
    onComplete: () => split.revert(), // Revert the split text when the timeline is complete
  });

  tl.fromTo(
    split.chars,
    {
      color: (i) => `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`,
      y: -10,
    },
    {
      duration: 0.3,
      color: "#6998ef",
      y: 0,
      stagger: 0.1, // Stagger is more effective here
      ease: "power.in1",
    }
  );
})();

(() => {
  const grid = document.querySelector(".backgroundGrid");
  const gridItem = document.createElement("div");
  gridItem.classList.add("gridItem");

  const elementsCount = 25;
  const usedColors = [];

  const randomColor = () => {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 30%)`;
    if (usedColors.includes(color)) {
      return randomColor();
    }
    usedColors.push(color);
    return color;
  };

  const randomEmoji = () => {
    const emojis = ["🍧", "🍦", "🍨", "🍰", "🍮", "🍫", "🍬", "🍭", "🍡", "🍢"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  for (let i = 0; i < elementsCount; i++) {
    const item = gridItem.cloneNode(true);
    const randomInnerEmoji = document.createElement("div");
    randomInnerEmoji.classList.add("innerEmoji");
    randomInnerEmoji.textContent = randomEmoji();
    item.appendChild(randomInnerEmoji);
    const randomRowSpan = Math.floor(Math.random() * 3) + 1;
    item.style.gridRow = `span ${randomRowSpan}`;
    item.style.backgroundColor = randomColor();
    grid.appendChild(item);
  }

  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
  });

  tl.to(".innerEmoji", {
    y: 10,
    duration: 1,
    ease: "power2.inOut",
  });
})();

export const animateFunButton = (btn) => {
  // Hover in
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      duration: 0.3,
      scale: 1.1,
      boxShadow: "0 0 20px rgba(13, 165, 48, 0.7)",
      ease: "back.out(1.7)",
    });
  });

  // Hover out
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      duration: 0.3,
      scale: 1,
      boxShadow: "none",
      ease: "power2.out",
    });
  });
};
