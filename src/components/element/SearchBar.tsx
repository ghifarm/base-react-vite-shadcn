import { useState, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const expand = () => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  const collapse = () => {
    if (!value) setOpen(false);
  };

  return (
    <div
      className={`flex h-10 cursor-pointer items-center rounded-full border bg-white transition-all duration-300 ease-in-out ${
        open ? 'w-min-10 w-full px-4 md:w-[280px]' : 'w-10 justify-center'
      } `}
      onClick={expand}
    >
      {open && (
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={collapse}
          placeholder="Cari di semua data..."
          className="border-none px-0 shadow-none focus-visible:ring-0"
        />
      )}

      <Search className="text-muted-foreground size-5" />
    </div>
  );
}
