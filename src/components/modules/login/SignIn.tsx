import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail, Eye } from "lucide-react";
import { motion } from "motion/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  formik: FormikProps<FormValues>;
}

export default function SignIn({ formik }: Props) {
  const [psType, setPsType] = useState<boolean>(false);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2">
        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup className="border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200">
            <InputGroupInput
              id="email"
              placeholder="Masukkan E-Mail"
              className="!pl-1 !text-gray-600"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    className="rounded-full text-gray-400"
                    size="icon-xs"
                  >
                    <Mail className="size-6" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent className="bg-white border-2 border-gray-300 rounded-lg">
                  Mail
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup className="border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200">
            <InputGroupInput
              id="password"
              placeholder="Masukkan Password"
              className={`!pl-1 !text-gray-600 ${
                formik.values.password && psType == false ? "password-big-dots" : ""
              }`}
              type={psType ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                className="rounded-full text-gray-400 cursor-pointer hover:text-pertamina-pastel-blue"
                size="icon-xs"
                onMouseEnter={() => setPsType(true)}
                onMouseLeave={() => setPsType(false)}
              >
                <Eye className="size-6 " />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </motion.div>
      </div>
    </form>
  );
}
