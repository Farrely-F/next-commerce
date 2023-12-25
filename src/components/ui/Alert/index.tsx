import { useEffect, useState } from "react";

export function SuccessAlert() {
  return (
    <>
      <div
        role="alert"
        className="rounded-xl border border-gray-100 bg-white p-4"
      >
        <div className="flex items-start gap-4">
          <span className="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div className="flex-1">
            <strong className="block font-medium text-gray-900">
              {" "}
              Login Succesfull{" "}
            </strong>

            <p className="mt-1 text-sm text-gray-700">
              Redirecting to Main Page
            </p>
          </div>

          <button className="text-gray-500 transition hover:text-gray-600">
            <span className="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export function FailedAlert() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(dismissTimer); // Clear the timer if the component is unmounted
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div
      role="alert"
      className={`rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4 fixed bottom-4 left-4 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <strong className="block font-medium text-red-800">
        {" "}
        Something went wrong{" "}
      </strong>

      <p className="mt-2 text-sm text-red-700">
        Please Check Your Email Adress/Password and Try Again
      </p>
    </div>
  );
}
