import GitIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/LinkedIn";

import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <span>JMOVIES</span>

      <nav className="footer-links">
        <ul>
          <li>
            <a href="/about">
              <GitIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="/contact">
              <LinkIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </nav>

      <h3>By Jacs with 🤍</h3>
    </footer>
  );
};
