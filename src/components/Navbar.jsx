import logo from "../../public/assets/tenliner.svg"
import logo2 from "../../public/assets/TenlinerText.svg"

const NavBar = () => {
    return (
        <div className="flex w-full justify-between items-center">
            <div>
                <img
                    src={logo}
                />
            </div>
            <div>
                <img
                    src={logo2}
                />
            </div>
        </div>
    );
}

export default NavBar;