import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import MailIcon from "@/assets/icon/MailIcon";
import { Button } from "../ui/button";
interface NavbarProps {
  profile: { name: string };
  logout: () => void;
}

export default function Navbar({ profile, logout }: NavbarProps) {
  return (
    <div className="bg-gray-200 rounded-2xl min-h-16 p-2 flex items-center justify-between gap-4">
      <div className="flex items-center">
        <SidebarTrigger />
        <div>Welcome, {profile ? profile.name : "Guest"}!</div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="default" size="icon-sm" asChild>
          <Link to="/messages">
            <MailIcon className="size-6 text-gray-600" />
          </Link>
        </Button>
        {profile ? (
          <button
            onClick={() => logout()}
            className="text-red-500 ml-auto hover:underline"
          >
            Logout
          </button>
        ) : (
          <Link
            className="ml-auto text-blue-600 font-medium hover:underline"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
