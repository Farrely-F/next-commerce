import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function LoginView() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const callbackUrl: string = (router.query.callbackUrl as string) || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl: Array.isArray(callbackUrl) ? callbackUrl[0] : callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
      console.error(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sign In Now
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Please Login First to use Our Service
          </p>

          <form
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
            />

            <Button variant="primary" type="submit" isLoading={isLoading}>
              {isLoading ? "Signing In ..." : "Sign In"}
            </Button>
            <div className="border-t border-b border-slate-200"></div>
            <div>
              <Button
                onClick={() =>
                  signIn("google", { callbackUrl, redirect: false })
                }
                type="button"
                variant="outline"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4f46e5"
                      d="M12.222 5.977a5.402 5.402 0 0 1 3.823 1.496l2.868-2.868A9.61 9.61 0 0 0 12.222 2a9.996 9.996 0 0 0-8.937 5.51l3.341 2.59a5.96 5.96 0 0 1 5.596-4.123"
                      opacity=".7"
                    />
                    <path
                      fill="#4f46e5"
                      d="M3.285 7.51a10.013 10.013 0 0 0 0 8.98l3.341-2.59a5.913 5.913 0 0 1 0-3.8z"
                    />
                    <path
                      fill="#4f46e5"
                      d="M15.608 17.068A6.033 6.033 0 0 1 6.626 13.9l-3.34 2.59A9.996 9.996 0 0 0 12.221 22a9.547 9.547 0 0 0 6.618-2.423z"
                      opacity=".5"
                    />
                    <path
                      fill="#4f46e5"
                      d="M21.64 10.182h-9.418v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018l-.01.006l.01-.006l3.232 2.51a9.753 9.753 0 0 0 2.982-7.35c0-.687-.06-1.371-.182-2.046"
                      opacity=".25"
                    />
                  </svg>
                </span>
                Sign In With Google
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Dont Have Account?
              <Link href={"/auth/register"} className="underline ml-2">
                Sign Up
              </Link>
            </p>
          </form>
          {error && (
            <p className="text-red-500 mx-auto text-center mt-4">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}
