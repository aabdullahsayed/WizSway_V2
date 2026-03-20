import './Header.css'
function Header(){
    return(
        <header>
            <nav style={{justifyContent:"center", display:"flex",textAlign:"center", gap: "30px"}}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
                <a href="#">Products</a>
        </nav>

        </header>
    );
}

export default Header;