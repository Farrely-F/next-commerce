type Props = {
  type: "submit" | "button" | "reset" | undefined;
  variant: "primary" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
};

export default function Button({
  type,
  variant,
  children,
  onClick,
  isLoading,
}: Props) {
  return (
    <>
      <button
        disabled={isLoading}
        className={`w-full rounded-lg px-5 py-3 text-sm font-medium flex justify-center items-center gap-4 ${
          variant === "primary"
            ? "bg-blue-700 text-white"
            : variant === "outline"
            ? "border border-blue-700 text-blue-700"
            : isLoading === true
            ? "bg-blue-400"
            : ""
        } `}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
