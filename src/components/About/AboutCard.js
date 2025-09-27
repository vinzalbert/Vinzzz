import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Davin Taqqi Akbar </span>
            from <span className="purple"> Depok, Jawa Barat.</span>
            <br />A graduate of SMK Tridaya Cibinong, majoring in Computer and Network Engineering, with a deep understanding of IT infrastructure, networking, and cybersecurity. He has a strong interest in managing and securing networks and computer systems to create a stable and reliable IT foundation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> social media design
            </li>
            <li className="about-activity">
              <ImPointRight /> listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> reading manga
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Against a million impossibilities with one belief"{" "}
          </p>
          <footer className="blockquote-footer">VinzEdtz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
