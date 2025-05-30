import { Geist, Geist_Mono } from "next/font/google";
import "./../../globals.css";
import Header from "@/Components/Common/Header";
import Footer from "@/Components/Common/Footer";


export const metadata = {
    title: "Job Website",
    description: "Generated by create next app",
};

// not root layout this is main layout

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
