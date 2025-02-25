import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Unsubscribe = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");
    const resubscribe = searchParams.get("resubscribe");
    const userId = searchParams.get("id");
    const [message, setMessage] = useState("");

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        if (resubscribe === "true" && userId) {
            fetch(`${API_BASE_URL}/users/subscribe/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.user) {
                        setMessage("You're resubscribed! Looking forward to celebrating with you! 🎂🎈");
                    } else {
                        setMessage(data.message || "An error occurred while resubscribing.");
                    }
                })
                .catch(() => setMessage("An error occurred while resubscribing."));
        } else if (status === "success") {
            setMessage("Unsubscribed! 😢 No more birthday messages, but we'll always be cheering for you!");
        } else if (status === "not_found") {
            setMessage("User not found. Please check the link or contact support.");
        } else {
            setMessage("An error occurred while processing your request.");
        }
    }, [status, resubscribe, userId, API_KEY]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 py-10 sm:py-20">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-red-600">{message}</h2>
                {resubscribe !== "true" && userId && (
                    <p className="mt-4 text-gray-600">
                        If this was a mistake,{" "}
                        <a href={`?resubscribe=true&id=${userId}`} className="text-blue-500">
                            click here to resubscribe
                        </a>.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Unsubscribe;
