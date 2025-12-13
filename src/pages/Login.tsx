import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import imagebg from "@/assets/image/pertaminabg.jpg";
import pertareLogo from "@/assets/image/logo.png";
import Typography from "@/components/element/Typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "@/components/modules/login/SignIn";
import SignUp from "@/components/modules/login/SignUp";
import { useFormik, FormikHelpers } from "formik";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useSignup, useSignIn } from "@/api/auth";
import LoadingSpinner from "@/components/widget/LoadingSpinner";
import { toast } from "sonner";
import * as Yup from "yup";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";

interface SignInFormValues {
  identifier: string;
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
  const navigate = useNavigate();
  const signup = useSignup();
  const signin = useSignIn();
  const [tabsValue, setTabsValue] = useState<string>("sign-in");

  const formikSignIn = useFormik<SignInFormValues>({
    enableReinitialize: true,
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: async (
      values: SignInFormValues,
      { setSubmitting }: FormikHelpers<SignInFormValues>
    ) => {
      try {
        const { identifier, password } = values;
        const result = await signin.mutateAsync({ identifier, password });
        const profile = result.profile;
        navigate("/", { replace: true });

        toast.success(`Selamat datang kembali, ${profile.name}!`);
      } catch (err: any) {
        toast.error(err.message || "Terjadi kesalahan saat masuk.");
      } finally {
        setSubmitting(false);
      }
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
      name: Yup.string()
        .required("Nama wajib diisi")
        .max(50, "Nama maksimal 50 karakter")
        .matches(
          /^[a-zA-Z\s]+$/,
          "Nama tidak boleh mengandung karakter khusus atau emotikon"
        ),
      email: Yup.string()
        .email("Alamat email tidak valid")
        .required("Email wajib diisi"),
      password: Yup.string()
        .required("Password wajib diisi")
        .matches(
          /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
          "Password tidak boleh mengandung emotikon"
        ),
      username: Yup.string()
        .required("Username wajib diisi")
        .max(30, "Username maksimal 30 karakter")
        .matches(
          /^[a-z0-9_]+$/,
          "Username hanya boleh mengandung huruf kecil, angka, dan underscore"
        ),
      phone: Yup.string()
        .required("Nomor telepon wajib diisi")
        .min(10, "Nomor telepon minimal 10 karakter")
        .max(19, "Nomor telepon maksimal 19 karakter")
        .matches(/^[0-9]+$/, "Nomor telepon hanya boleh mengandung angka"),
    }),
    onSubmit: async (
      values: SignUpFormValues,
      { setSubmitting, setErrors }: FormikHelpers<SignUpFormValues>
    ) => {
      try {
        const { name, username, phone, email, password } = values;
        await signup.mutateAsync({ email, password, name, username, phone });
        toast.success("Pendaftaran berhasil! Silahkan Masuk.");
        formikSignUp.resetForm();
      } catch (err: any) {
        toast.error(err.message || "Terjadi kesalahan saat pendaftaran.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    switch (tabsValue) {
      case "sign-in":
        formikSignUp.resetForm();
        break;
      case "sign-up":
        formikSignIn.resetForm();
        break;
    }
  }, [tabsValue]);
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
                  className="w-full h-10 data-[state=active]:bg-pertamina-pastel-blue data-[state=active]:text-white data-[state=active]:rounded-2xl data-[state=active]:shadow-none transition-all duration-200 cursor-pointer"
                >
                  <Typography variant="button-small">Masuk</Typography>
                </TabsTrigger>
                <TabsTrigger
                  value="sign-up"
                  className="w-full h-10 data-[state=active]:bg-pertamina-pastel-blue data-[state=active]:text-white data-[state=active]:rounded-2xl data-[state=active]:shadow-none transition-all duration-200 cursor-pointer"
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
                    tabIndex={3}
                    className={`mt-4 w-full bg-pertamina-pastel-blue rounded-3xl py-6 cursor-pointer ${
                      signin.isPending ? "cursor-progress" : ""
                    }`}
                    size="lg"
                    type="button"
                    onClick={() => formikSignIn.handleSubmit()}
                    disabled={signin.isPending}
                  >
                    {signin.isPending && <LoadingSpinner size={24} />}
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
                    className={`mt-4 w-full bg-pertamina-pastel-blue rounded-3xl py-6 cursor-pointer ${
                      signup.isPending ? "cursor-progress" : ""
                    }`}
                    size="lg"
                    tabIndex={6}
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
          <div className="w-full space-y-4">
            {/* OR Separator */}
            <div className="relative flex items-center gap-2">
              <Separator className="flex-1 p-px rounded-4xl bg-gray-200" />
              <Typography variant="caption" className="text-gray-400">
                Atau
              </Typography>
              <Separator className="flex-1 p-px rounded-4xl bg-gray-200" />
            </div>

            {/* Google Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="w-full py-6 rounded-full flex items-center gap-3 border-gray-300 cursor-pointer"
              >
                <FcGoogle size={20} />
                <span>Signup with Google</span>
              </Button>
            </motion.div>
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
