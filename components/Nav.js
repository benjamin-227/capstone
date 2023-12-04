import html from "html-literal";

export default links => html`
  <nav>
    <div class="sidebar">
      <ul>
        ${links
          .map(
            link =>
              `
              <li>
                <span class="material-icons-sharp">${link.icon}</span>
                <a href="/${link.title}" title="${link.title}" data-navigo>
                ${link.text}
                </a>
              </li>
            `
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;
