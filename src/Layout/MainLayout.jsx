import App from "../App";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="w-full h-screen max-h-screen">
            <Header />
            <App />
        </div>
    )
}