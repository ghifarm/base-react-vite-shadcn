import { SidebarTrigger } from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Typography from '../element/Typography';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { SearchIcon, CheckIcon } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Separator } from '@radix-ui/react-separator';
import SearchBar from '../element/SearchBar';

interface NavbarProps {
  profile: { name: string; email: string };
  logout: () => void;
}

export default function Navbar({ profile, logout }: NavbarProps) {
  return (
    <div className="flex min-h-20 items-center justify-between gap-4 rounded-2xl bg-gray-200 p-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="h-[40px] w-[40px] cursor-pointer !rounded-full bg-white" />
        <SearchBar value="" onChange={() => {}} />
      </div>
      <div className="flex items-center gap-2">
        {/* <Link
          to="/about"
          className="rounded-full p-3 shadow-none bg-white hover:bg-gray-100"
        >
          <Mail className="size-6 text-gray-400" />
        </Link> */}
        <Link
          to="/about"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-none hover:bg-gray-100"
        >
          <Bell className="size-5 text-gray-600" />
        </Link>
        <Separator orientation="vertical" className="h-10 w-[2px] rounded-2xl bg-gray-400" />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2">
            <Avatar className="h-[40px] w-[40px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="hidden text-start md:block">
              <Typography variant="sh3">{profile ? profile.name : 'Guest'}</Typography>
              <Typography variant="overline" className="text-gray-400">
                {profile ? profile.email : 'Guest'}
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
