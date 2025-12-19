import Typography from '@/components/element/Typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputForm from '@/components/element/InputForm';
import { IconCheck } from '@tabler/icons-react';

export default function FormSpbu() {
  return (
    <>
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>
            <Typography variant="sh2">Form SPBU</Typography>
          </CardTitle>
          <CardDescription>
            <Typography variant="caption">Silahkan Isi Data SPBU disini</Typography>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="code">Code</Label>
            <InputForm />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
