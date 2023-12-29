import { useState, useEffect } from "react"

export function Dark(){
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const HandleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return(
        
        <div className="h-screen bg-gray-500 grid place-items-center dark:bg-black">
            <button className="bg-blue-500 dark:bg-white dark:text-black p-4 rounded-3xl" onClick={HandleThemeSwitch}>Dark mode</button>
        </div>
    )
}
