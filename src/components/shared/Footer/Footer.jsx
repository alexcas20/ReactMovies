import GitIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/LinkedIn";

import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="section-footer">
        <span>JMOVIES</span>
        

        <nav className="footer-links">
          
              <a href="/about">
                <GitIcon fontSize="large" />
              </a>
            
              <a href="/contact">
                <LinkIcon fontSize="large" />
              </a>
         
        </nav>

        <h3>By Jacs with 🤍</h3>
      </section>
    </footer>
  );
};
