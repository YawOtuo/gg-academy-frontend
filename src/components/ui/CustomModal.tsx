import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dialogVariants = cva("w-full z-[200]", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      "8xl": "max-w-8xl",
      full: "",
    },
  },
});
interface CustomDialogProps extends VariantProps<typeof dialogVariants> {
  trigger: React.ReactNode;

  body: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  trigger,
  open,
  setOpen,
  footer,
  size = "5xl",
  body,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className={`${cn(dialogVariants({ size }))} `}>
        {/* <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader> */}
        <div>
          {body} {/* Render additional content if any */}
        </div>
        {/* <div>
          <button onClick={onConfirm}>Confirm</button>
          {onCancel && <button onClick={onCancel}>Cancel</button>}
        </div> */}
        <div>{footer}</div>{" "}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
