import Typography from '@/components/element/Typography';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { FileExportIcon, PlusSignIcon } from '@hugeicons/core-free-icons';
import { Link } from 'react-router-dom';
import FormSpbu from '@/components/modules/spbu/FormSpbu';

export default function Form() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <Typography variant="h4" className="mb-2">
            Tambah SPBU
          </Typography>
          <Typography variant="body" className="w-2/3 text-gray-500">
            Form untuk menambahkan data SPBU baru beserta informasi ketersediaan lot dan pemanfaatan
            area.
          </Typography>
        </div>
        <div className="flex gap-4">
          <Button size="pertamina-lg" variant="pertamina-primary" asChild>
            <Link to="/spbu/form">
              <HugeiconsIcon icon={PlusSignIcon} size={48} color="currentColor" strokeWidth={2.5} />
              Tambah SPBU
            </Link>
          </Button>
          <Button size="pertamina-lg" variant="outline-pertamina-primary">
            <HugeiconsIcon icon={FileExportIcon} size={48} color="currentColor" strokeWidth={2.5} />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <FormSpbu />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
