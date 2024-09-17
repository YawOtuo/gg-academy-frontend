"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateStudent } from "@/lib/hooks/student.hook";
import { Formik, Form, ErrorMessage } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import * as Yup from "yup";

const initialValues = {
  name: "",
  age: "",
  email: "",
  dateOfBirth: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
});

const Page = () => {
  const [data, setData] = useState();
  const { mutate: createMutate, isLoading, isError } = useCreateStudent(data);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    setData(values);
    resetForm();
  };

  useEffect(() => {
    if (data) {
      createMutate();
    }
  }, [data]);
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form className="gap-5 grid grid-cols-3 p-5 w-full">
          <div className="col-span-3 lg:col-span-1 flex flex-col gap-5 w-full">
            <div className="flex flex-col w-full h-full justify-center gap-10 items-center pb-10">
              <div className="w-full h-full max-w-[300px] aspect-square relative flex justify-center rounded-2xl overflow-hidden">
                <Image 
                objectFit="cover"
                  src={
                    "https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="Profile Image"
                  fill
                />
              </div>
              <Button variant={"outline"} className="flex w-full gap-3">
                <AiOutlineUpload className="text-primary" size={30} />
                Upload Image
              </Button>
            </div>

          
          </div>
          <div className="col-span-3 lg:col-span-1 flex flex-col gap-5">
            <div className="">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="form-input"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="">
              <label htmlFor="age">Age</label>
              <Input
                type="text"
                id="age"
                name="age"
                placeholder="Enter your age"
                className="form-input"
              />
              <ErrorMessage name="age" component="div" className="error" />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="">
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <Input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Enter your dob"
                className="form-input"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 flex flex-col gap-5">
            <div className="">
              <label htmlFor="bio">Bio:</label>
              <Input
                as="textarea" // Use 'textarea' as the component
                id="bio"
                name="bio"
                className="form-input-textarea px-4 max-w-[422px]
                  border-[#E6E6E6] rounded-[4px] text-[#737373]
                  border py-2"
                rows="15" // Optional: Set the number of rows for the text area
                cols="50" // Optional: Set the number of columns for the text area
              />
            </div>
            <Button type="submit" className="max-w-[400px]">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Page;
