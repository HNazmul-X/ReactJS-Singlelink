import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({ children }) => {
    const [isNavbarLayout, setIsNavbarLayout] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const restrictedPath = ["/login"];
        restrictedPath.forEach((path) => {
            setIsNavbarLayout(path !== router.pathname);
        });
    }, [router.pathname]);
    return (
        <>
            {isNavbarLayout && <Navbar />}
            {children}
            {isNavbarLayout && <Footer />}
        </>
    );
};

export default Layout;
