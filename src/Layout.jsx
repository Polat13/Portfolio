import React from "react";
import { Outlet } from "react-router-dom";
import FloatingLinesBG from "./components/FloatingLines.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export function Layout() {
    return (
        <div className="relative min-h-screen w-full flex flex-col bg-[#050816] text-white overflow-x-hidden">
            <div className="fixed inset-0  pointer-events-none">
                <FloatingLinesBG
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={[10, 5, 10]}
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>
            <div className="relative flex flex-col flex-1">
                
                <header className="flex justify-center p-6 md:p-12 w-full">
                    <Navbar />
                </header>

                <main className="flex-1 w-full px-4 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center">
                    <div className="w-full max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default Layout;