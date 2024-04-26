import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "../Form/Form";

interface ModalFormProps {
    title: string;
}
export const ModalForm = ({ title }: ModalFormProps) => {
    return (
        <Dialog>
            <DialogTrigger>{title}</DialogTrigger>
            <DialogContent className="bg-transparent text-white border-none shadow-none p-10">
                <Form />
            </DialogContent>
        </Dialog>
    );
};