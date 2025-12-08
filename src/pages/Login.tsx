import { useAuth } from "@/store/userAuth";
import { Card } from "@/components/ui/card";
import imagebg from "@/assets/image/pertaminabg.jpg";
import pertareLogo from "@/assets/image/logo.png";
import Typography from "@/components/element/Typography";

export default function Login() {
  const handleLogin = async () => {
    const token = "FAKE_TOKEN_ABC";
    const user = { name: "Ghifar" };

    useAuth.getState().login(user, token);
  };

  return (
    <div
      className="grid sm:grid-cols-5 min-h-screen p-4"
      style={{
        backgroundImage: `url(${imagebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="col-span-2 w-full h-full border-0 rounded-3xl opacity-95 p-14 bg-white">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <img src={pertareLogo} alt="Pertare Logo" className="w-48" />
            <div>
              <Typography variant="sh1">Selamat Datang Kembali</Typography>
              <Typography variant="caption" className="text-gray-600">
                Kami Senang Melihat Anda Kembali
              </Typography>
            </div>
          </div>
        </div>
      </Card>
      <div className="hidden sm:flex flex-col justify-center p-6"></div>
    </div>
  );
}
