import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const MobileNav = () => {
  return (
    <div className="bg-secondary py-2">
      <NavigationMenu>
        <NavigationMenuList className="w-screen flex px-3 justify-between">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/">HOME</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/lists">LISTS</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/profile">PROFILE</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MobileNav;
