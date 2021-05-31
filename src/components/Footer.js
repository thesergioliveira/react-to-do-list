const Footer = () => {
    const year = new Date().getFullYear();
    // console.log(year);
    return (
        <div>
            <footer>
                <span> Made with 🔥 by Sergio Oliveira</span>
                <p>Copyrights © {year}</p>
                
            </footer>
        </div>
    )
}
export default Footer;