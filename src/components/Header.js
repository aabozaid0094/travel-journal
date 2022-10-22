import { FaGlobeAfrica } from "react-icons/fa";

const Header = (props)=>{
    return (
        <header>
            <FaGlobeAfrica/>
            <h1 className="header-title">{props.title}</h1>
        </header>
    );
}

export default Header;