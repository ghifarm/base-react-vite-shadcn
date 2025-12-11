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
import { Mail, Eye, User, UserRound, Phone } from "lucide-react";
import { motion } from "motion/react";
import { FormikProps } from "formik";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  password: string;
  username: string;
  phone: string;
}

interface Props {
  formik: FormikProps<FormValues>;
}

export default function SignUp({ formik }: Props) {
  const [psType, setPsType] = useState<boolean>(false);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-2">
        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup
            className={`${
              formik.touched.name && formik.errors.name ? "!border-red-500" : ""
            } border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200`}
          >
            <InputGroupInput
              id="name"
              tabIndex={1}
              placeholder="Masukkan Nama"
              className="!pl-1 !text-gray-600"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    className="rounded-full text-gray-400"
                    size="icon-xs"
                  >
                    <User className="size-6" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent className="bg-white border-2 border-gray-300 rounded-lg">
                  Nama
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          {formik.touched.name && formik.errors.name && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}
            >
              <p className="ps-4 text-red-500 text-sm">{formik.errors.name}</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup
            className={`${
              formik.touched.phone && formik.errors.phone
                ? "!border-red-500"
                : ""
            } border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200`}
          >
            <InputGroupInput
              id="phone"
              tabIndex={2}
              placeholder="Masukkan Nomor Telepon"
              className="!pl-1 !text-gray-600"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    className="rounded-full text-gray-400"
                    size="icon-xs"
                  >
                    <Phone className="size-6" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent className="bg-white border-2 border-gray-300 rounded-lg">
                  Nomor Telepon
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          {formik.touched.phone && formik.errors.phone && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}
            >
              <p className="ps-4 text-red-500 text-sm">{formik.errors.phone}</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup className={`${
              formik.touched.username && formik.errors.username ? "!border-red-500" : ""
            } border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200`}
          >
            <InputGroupInput
              id="username"
              tabIndex={3}
              placeholder="Masukkan Username"
              className="!pl-1 !text-gray-600"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    className="rounded-full text-gray-400"
                    size="icon-xs"
                  >
                    <UserRound className="size-6" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent className="bg-white border-2 border-gray-300 rounded-lg">
                  Username
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          {formik.touched.username && formik.errors.username && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}
            >
              <p className="ps-4 text-red-500 text-sm">
                {formik.errors.username}
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup className={`${
              formik.touched.email && formik.errors.email ? "!border-red-500" : ""
            } border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200`}
          >
            <InputGroupInput
              id="email"
              tabIndex={4}
              placeholder="Masukkan E-Mail"
              className="!pl-1 !text-gray-600"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
          {formik.touched.email && formik.errors.email && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}
            >
              <p className="ps-4 text-red-500 text-sm">{formik.errors.email}</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <InputGroup className={`${
              formik.touched.password && formik.errors.password ? "!border-red-500" : ""
            } border-2 py-6 px-3 border-gray-200 rounded-3xl focus-within:border-pertamina-pastel-blue transition-all duration-200`}
          >
            <InputGroupInput
              id="password"
              tabIndex={5}
              placeholder="Masukkan Password"
              className={`!pl-1 !text-gray-600 ${
                formik.values.password && psType == false
                  ? "password-big-dots"
                  : ""
              }`}
              type={psType ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
          {formik.touched.password && formik.errors.password && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}
            >
              <p className="ps-4 text-red-500 text-sm">
                {formik.errors.password}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </form>
  );
}
