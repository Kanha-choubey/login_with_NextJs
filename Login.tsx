"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Yup from "yup";
import { useFormik } from "formik";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9.%+-]+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
      "Please enter a valid email  "
    )
    .required(" "),
  password: Yup.string()
    .min(3, "Password must not ne less then 3 characters")
    .required("Please enter a password"),
});
const Login = () => {
  const { handleBlur, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  
      onSubmit: (values ) => {
     console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] h-[400px] container shadow-2xl  "
      >
        <CardHeader>
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Label className="text-xl font-bold">Email</Label>
          <Input
            required
            id="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 mb-4"
            placeholder="Enter your Email"
          />
          <Label className="txt-xl font-bold">Password</Label>
          <Input
            required
            id="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 text-blue-500 "
            placeholder="Enter your Password"
          />
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button
            type="submit"
            className=" text-white bg-gradient-to-br w-full mt-10 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </Button>
        </CardFooter>
      </form>
    </div>
  );
};

export default Login;
