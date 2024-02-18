function createProjectCard(card) {
  const article = document.createElement("article");
  article.className = "relative bg-black rounded-md p-2 mr-2 mb-2 ";

  const image = document.createElement("img");
  image.src = card.image;
  image.alt = `Project`;
  image.className =
    "w-96 h-42 object-cover border-2 border-gray-200 mb-4 rounded-lg ";
  article.appendChild(image);

  const typeHeading = document.createElement("p");
  typeHeading.textContent = card.type;
  typeHeading.className =
    "absolute bottom-14 left-4 bg-gray-900 pl-2 rounded-full w-2/6 text-white text-sm";
  article.appendChild(typeHeading);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex text-center";

  function createLink(text, className, href) {
    const link = document.createElement("a");
    link.className = className;
    link.textContent = text;
    link.href = href;
    return link;
  }

  const webButton = createLink(
    "App",
    "font-bold text-red-500 hover:bg-gray-900 w-full rounded-lg",
    card.appLink
  );

  const codeButton = createLink(
    "Code",
    "font-bold text-green-500 hover:bg-gray-900 w-full rounded-lg",
    card.codeLink
  );

  buttonContainer.appendChild(webButton);
  buttonContainer.appendChild(codeButton);

  article.appendChild(buttonContainer);
  document.getElementById("projects-container").appendChild(article);
}

projects.forEach(createProjectCard);
