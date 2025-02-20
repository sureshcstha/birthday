import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Unsubscribe = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");
    const resubscribe = searchParams.get("resubscribe");
    const userId = searchParams.get("id");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (resubscribe === "true" && userId) {
            fetch(`https://bday-787u.onrender.com/users/subscribe/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.user) {
                        setMessage("You have been resubscribed to the email list.");
                    } else {
                        setMessage(data.message || "An error occurred while resubscribing.");
                    }
                })
                .catch(() => setMessage("An error occurred while resubscribing."));
        } else if (status === "success") {
            setMessage("You have successfully unsubscribed from birthday emails.");
        } else if (status === "not_found") {
            setMessage("User not found. Please check the link or contact support.");
        } else {
            setMessage("An error occurred while processing your request.");
        }
    }, [status, resubscribe, userId]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
