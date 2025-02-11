import { FaGears } from "react-icons/fa6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="flex flex-col items-center justify-center h-screen gap-4">
                        <FaGears className="text-6xl" />

                        <h1 className="text-3xl font-bold">In Development</h1>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
