import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import authServices from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function RegisterView() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await authServices.registerAcount(data);

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      router.push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Account already Registered");
      console.error("error");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Register Now
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Please Register to use Our Service
          </p>

          <form
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <Input
              label="Full Name"
              name="fullname"
              type="text"
              placeholder="Full Name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              label="Phone"
              name="phone"
              type="number"
              placeholder="Phone"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button variant="primary" disabled={isLoading} type="submit">
              {isLoading ? "Registering..." : "Register"}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Already Have account?
              <Link href={"/auth/login"} className="underline ml-2">
                Sign In
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
