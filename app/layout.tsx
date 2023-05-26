import "./styles/globals.css";

export const metadata = {
    title: "Poparda Project",
    description: "Project to learn more about Riot Games API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="poparditen">{children}</body>
        </html>
    );
}
