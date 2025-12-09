import { useAuth } from "@/store/userAuth";
import { Card } from "@/components/ui/card";
import imagebg from "@/assets/image/pertaminabg.jpg";
import pertareLogo from "@/assets/image/logo.png";
import Typography from "@/components/element/Typography";
import { useFormik } from "formik";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function Login() {
  const handleLogin = async () => {
    const token = "FAKE_TOKEN_ABC";
    const user = { name: "Ghifar" };
    useAuth.getState().login(user, token);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="grid md:grid-cols-2 min-h-screen p-2">
      <div className="p-24 bg-white">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-10">
            <img src={pertareLogo} alt="Pertare Logo" className="w-48" />
            <div className="text-center">
              <Typography variant="h4">Selamat Datang Kembali</Typography>
              <Typography variant="body" className="text-neutral-400">
                Kami Senang Melihat Anda Kembali
              </Typography>
            </div>
          </div>
          <div>
            <Tabs defaultValue="sign-in" className="w-full">
              <TabsList className="w-80 h-12 bg-gray-100 rounded-2xl gap-2 p-1 text-gray-600">
                <TabsTrigger
                  value="sign-in"
                  className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:rounded-2xl data-[state=active]:shadow transition-all duration-200 cursor-pointer"
                >
                  <Typography variant="button-small">Masuk</Typography>
                </TabsTrigger>
                <TabsTrigger
                  value="sign-up"
                  className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:rounded-2xl data-[state=active]:shadow transition-all duration-200 cursor-pointer"
                >
                  <Typography variant="button-small">Daftar</Typography>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sign-in">
                <InputGroup>
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton>Search</InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </TabsContent>
              <TabsContent value="sign-up">
                Change your password here.
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
