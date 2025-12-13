import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import MailIcon from "@/assets/icon/MailIcon";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Typography from "../element/Typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  profile: { name: string; email: string };
  logout: () => void;
}

export default function Navbar({ profile, logout }: NavbarProps) {
  return (
    <div className="bg-gray-200 rounded-2xl min-h-20 p-4 flex items-center justify-between gap-4">
      <div className="flex items-center">
        <SidebarTrigger className="cursor-pointer" />
      </div>
      <div className="flex items-center gap-2">
        <Link
          to="/about"
          className="rounded-full p-4 shadow-none bg-white hover:bg-gray-100"
        >
          <MailIcon className="size-5 text-gray-600" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-start">
              <Typography variant="sh3">
                {profile ? profile.name : "Guest"}
              </Typography>
              <Typography variant="overline" className="text-gray-400">
                {profile ? profile.email : "Guest"}
              </Typography>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
