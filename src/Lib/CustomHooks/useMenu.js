import { useState } from "react";

export default function useMenu(){
    const [menu, setOpenMenu] = useState(null);

    const openMenu = (event) => {
        setOpenMenu(event.currentTarget);
    }

    const closeMenu = () => {
        setOpenMenu(null)
    }

    return {menu, openMenu, closeMenu};
}