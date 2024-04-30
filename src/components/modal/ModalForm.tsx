import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Form } from "../Form/Form";

interface ModalFormProps {
    title: string;
}
export const ModalForm = ({ title }: ModalFormProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="bg-customerPrimary text-customerSecondary px-10 py-2 rounded-md mt-8 md:mt-4 font-bold drop-shadow-xl">{title}</DialogTrigger>
            <DialogContent className="bg-transparent text-white border-none shadow-none p-10">
                <Form modalController={setIsOpen} />
            </DialogContent>
        </Dialog>
    );
};