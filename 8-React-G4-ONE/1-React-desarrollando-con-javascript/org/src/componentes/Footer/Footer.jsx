import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style = {{backgroundImage: "url(/img/footer.png)"}}>
    <div className="redes">
        <a href="https://www.readu.com/">
            <img  src = "/img/facebook.png" alt = "Facebook"/>
        </a>
        <a href="https://www.readu.com/">
            <img src="/img/twitter.png" alt = "Twitter"/>
        </a>
        <a href="https://www.readu.com/">
            <img src= "/img/instagram.png" alt = "Instagram"/>
        </a>
    </div>
    <img src="/img/logo.png" alt = "Organizacion"/>
    <strong>Desarrollado por Readu S.A.</strong>
    </footer>;
};

export default Footer;
