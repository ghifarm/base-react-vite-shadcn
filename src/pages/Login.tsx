import { useAuth } from "@/store/userAuth";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import imagebg from "@/assets/image/pertaminabg.jpg";
import pertareLogo from "@/assets/image/logo.png";
import Typography from "@/components/element/Typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "@/components/modules/login/SignIn";
import SignUp from "@/components/modules/login/SignUp";
import { useFormik, FormikHelpers, FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useSignup } from "@/api/auth";
import LoadingSpinner from "@/components/widget/LoadingSpinner";
import { toast } from "sonner";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  username: string;
  phone: string;
}

export default function Login() {
  const signup = useSignup();
  const [tabsValue, setTabsValue] = useState<string>("sign-in");

  useEffect(() => {
    console.log("Current tab:", tabsValue);
  }, [tabsValue]);

  const handleLogin = async () => {
    const token = "FAKE_TOKEN_ABC";
    const user = { name: "Ghifar" };
    useAuth.getState().login(user, token);
  };

  const formikSignIn = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Partial<FormValues> = {};
      if (!values.email) errors.email = "Email wajib diisi";
      return errors;
    },
    onSubmit: (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      console.log("Submit dari parent:", values);
      setSubmitting(false);
    },
  });

  const formikSignUp = useFormik<SignUpFormValues>({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      username: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama wajib diisi"),
      email: Yup.string()
        .email("Alamat email tidak valid")
        .required("Email wajib diisi"),
      password: Yup.string().required("Password wajib diisi"),
      username: Yup.string().required("Username wajib diisi"),
      phone: Yup.string().required("Nomor telepon wajib diisi"),
    }),
    onSubmit: async (
      values: SignUpFormValues,
      { setSubmitting, setErrors }: FormikHelpers<SignUpFormValues>
    ) => {
      try {
        const { name, username, phone, email, password } = values;
        await signup.mutateAsync({ email, password, name, username, phone });
        toast.success("Pendaftaran berhasil! Silahkan Masuk.");
      } catch (err: any) {
        toast.error(err.message || "Terjadi kesalahan saat pendaftaran.");
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="grid md:grid-cols-2 min-h-screen md:p-2">
      <div className="p-20 md:p-24 bg-white overflow-y-auto h-screen">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-10">
            <img src={pertareLogo} alt="Pertare Logo" className="w-48" />
            <div className="">
              <Typography variant="h4">Selamat Datang Kembali</Typography>
              <Typography variant="body" className="text-neutral-400">
                Kami Senang Melihat Anda Kembali
              </Typography>
            </div>
          </div>
          <div>
            <Tabs defaultValue={tabsValue} onValueChange={setTabsValue}>
              <TabsList className="w-full h-12 border-2 border-gray-200 rounded-3xl gap-2 p-1 text-gray-600">
                <TabsTrigger
                  value="sign-in"
                  className="data-[state=active]:bg-pertamina-pastel-blue data-[state=active]:text-white data-[state=active]:rounded-2xl data-[state=active]:shadow-none transition-all duration-200 cursor-pointer"
                >
                  <Typography variant="button-small">Masuk</Typography>
                </TabsTrigger>
                <TabsTrigger
                  value="sign-up"
                  className="data-[state=active]:bg-pertamina-pastel-blue data-[state=active]:text-white data-[state=active]:rounded-2xl data-[state=active]:shadow-none transition-all duration-200 cursor-pointer"
                >
                  <Typography variant="button-small">Daftar</Typography>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sign-in" className="mt-4">
                <SignIn formik={formikSignIn} />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="mt-4 w-full bg-pertamina-pastel-blue rounded-3xl py-6"
                    size="lg"
                    type="button"
                    onClick={() => formikSignIn.handleSubmit()}
                  >
                    <Typography variant="body" className="text-white">
                      Masuk
                    </Typography>
                  </Button>
                </motion.div>
              </TabsContent>
              <TabsContent value="sign-up" className="mt-4">
                <SignUp formik={formikSignUp} />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="mt-4 w-full bg-pertamina-pastel-blue rounded-3xl py-6"
                    size="lg"
                    type="button"
                    onClick={() => formikSignUp.handleSubmit()}
                    disabled={signup.isPending}
                  >
                    {signup.isPending && <LoadingSpinner size={24} />}
                    <Typography variant="body" className="text-white">
                      Daftar
                    </Typography>
                  </Button>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Card
        className="hidden md:block border-0 rounded-3xl opacity-95 p-14"
        style={{
          backgroundImage: `url(${imagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Card>
    </div>
  );
}
