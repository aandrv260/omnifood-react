const scrollToSection = (to: string, behavior: ScrollBehavior) => {
  console.log(behavior);
  const sectionDestination = document.querySelector(to) as HTMLElement | null;

  console.log(sectionDestination);

  if (!sectionDestination) return;

  const destinationCoords = sectionDestination.getBoundingClientRect();
  const top = window.scrollY + destinationCoords.y + 20;
  const left = 0;

  window.scrollTo({ top, left });
};

export default scrollToSection;
