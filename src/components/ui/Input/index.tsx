import { useState } from "react";

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

export default function Input({ label, name, type, placeholder }: Props) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <div>
        {label && (
          <label htmlFor={name} className="sr-only">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            required
            type={
              type === "password" && !isRevealed
                ? "password"
                : type === "password" && isRevealed
                ? "text"
                : type
            }
            name={name}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={placeholder}
          />
          {type === "email"
            ? EmailIcon
            : type === "password"
            ? PasswordIcon({ isRevealed, setIsRevealed })
            : type === "number"
            ? PhoneIcon
            : null}
        </div>
      </div>
    </>
  );
}

const EmailIcon = (
  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  </span>
);

const PasswordIcon = ({
  isRevealed,
  setIsRevealed,
}: {
  isRevealed: boolean;
  setIsRevealed: any;
}) => {
  return (
    <button
      type="button"
      onClick={() => setIsRevealed(!isRevealed)}
      className="absolute inset-y-0 end-0 grid place-content-center px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </button>
  );
};

const PhoneIcon = (
  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        fill="lightgray"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
      />
    </svg>
  </span>
);
