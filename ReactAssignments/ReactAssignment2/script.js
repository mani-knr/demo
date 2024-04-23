const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img id="logo" src="./assets//UFC_Logo.svg" alt="failed to load" />
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>LOGIN</li>
        </ul>
      </nav>
    </header>
  );
};

const Body = () => {
  return (
    <main>
      <video width="50%" controls autoPlay muted>
        <source src="./assets/ufc.mp4" />
      </video>
      <div id="content">
        The Ultimate Fighting Championship (UFC) is a mixed martial arts (MMA)
        organization that hosts events featuring professional fighters from
        around the world. The sport combines striking and grappling techniques
        from various martial arts disciplines, and has grown in popularity in
        recent years due to its exciting, high-intensity fights and skilled
        athletes.
      </div>
    </main>
  );
};
const Footer = () => {
  return (
    <footer>
      <section>
        <span>Disclaimer : </span>You agree that your use of the services shall
        be at your sole risk. To the fullest extent permitted by law, UFC®, its
        officers, directors, employees, and agents ...
      </section>
      <br />
      <div>
        &copy;UFC Unoffical
        <div>
          Learn More :
          <a
            href="https://www.facebook.com/UFC/"
            className="fa fa-facebook"
          ></a>
          <a
            href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className="fa fa-twitter"
          ></a>
          <a
            href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className="fa fa-instagram"
          ></a>
        </div>
      </div>
    </footer>
  );
};
const Page = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
