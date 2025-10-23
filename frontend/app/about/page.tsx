import React from "react";

const AboutPage = () => {
  return (
    <main>
      <div id="AboutContainer">
        <div id="div1">
          <p>Assignment 1 Video Demonstration by Caleb Weir</p>
        </div>

        <div id="div2">
          <div id="videoContent">
            <iframe
              width="600"
              height="330"
              src="https://www.youtube.com/embed/fieS2eWJi_I"
              title="CSE3CWA ASsignment 1 - 21606057 Caleb Weir"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div id="div3">
          <footer>
            <hr />
            <p>© All Rights Reserved | Caleb J H Weir | 21606057 | 8/28/2025</p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
