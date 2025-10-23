import Link from "next/link";
import ThemeSelect from "./Components/ThemeSelect";
import MenuCookies from "./Components/Cookies";
import HamburgerMenu from "./Components/HamburgerMenu";
import TabGen from "./Components/TabGen";
import Output from "./Components/Output";

export default function Home() {
  return (
    <main>
      <div id="Container">
        <div id="div1">
          <p id="unId">21606057</p>
          <p id="title">Assignment 1</p>

          <hr />

          <header>
            <MenuCookies />
            <Link href="/about">About</Link>
            <HamburgerMenu />
          </header>

          <hr />
        </div>

        <div id="div2">
          <div
            id="content"
            style={{
              textAlign: "left",
              alignItems: "center",
              marginLeft: "100px",
            }}
          >
            <TabGen />
          </div>

          <div id="content3">
            <center>
              <ThemeSelect />
            </center>
            <Output />
          </div>
        </div>

        <hr />

        <div id="div3">
          <footer>
            <p>© All Rights Reserved | Caleb J H Weir | 21606057 | 8/28/2025</p>
          </footer>
        </div>

        <hr />
      </div>
    </main>
  );
}
