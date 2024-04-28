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
            <DialogTrigger>{title}</DialogTrigger>
            <DialogContent className="bg-transparent text-white border-none shadow-none p-10">
                <Form modalController={setIsOpen} />
            </DialogContent>
        </Dialog>
    );
};