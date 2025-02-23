import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 py-10 sm:py-20">
      <div className="bg-white p-6 rounded-lg shadow-md text-left sm:text-center">
        <h2 className="text-2xl font-bold">Thank You!</h2>
        <p className="text-gray-700 mt-2">✅ Your email has been added to my birthday mailing list! 🚀 Looking forward to sending you a special email on your birthday!</p>
        <p className="text-gray-700 mt-2">
            📩 A confirmation email is on its way. If it&apos;s not in your inbox, check your spam folder.
        </p>
        <p className="text-gray-700 mt-2">To return back to homepage,&nbsp;
            <Link to="/" className="inline-block text-blue-600 font-bold hover:underline">
            click here.
            </Link>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
