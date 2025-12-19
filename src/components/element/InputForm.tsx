import { IconCheck } from '@tabler/icons-react';
import { Label } from '@/components/ui/label';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

interface Props {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  placeholder?: string;
  type?: string;
  id?: string;
  label: string;
}

export default function InputForm({
  iconStart,
  iconEnd,
  placeholder,
  type = 'text',
  id,
  label,
}: Props) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <InputGroup className='border border-pertamina-green'>
        <InputGroupInput type={type} id={id} placeholder={placeholder} />
        {iconStart && <InputGroupAddon>{iconStart}</InputGroupAddon>}
        {iconEnd ? (
          iconEnd
        ) : (
          <InputGroupAddon align="inline-end">
            <div className="bg-pertamina-green text-primary-foreground flex size-5 items-center justify-center rounded-full">
              <IconCheck className="size-4" />
            </div>
          </InputGroupAddon>
        )}
      </InputGroup>
    </>
  );
}
