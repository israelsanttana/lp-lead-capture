import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import imgAuthMec from "../../assets/selo-emec-auth.webp"

export const VerificationMecFaculdadeUnica = () => {
    return (
        <Dialog>
            <DialogTrigger><img src={imgAuthMec} /></DialogTrigger>
            <DialogContent className="min-w-[80vw] h-[80vh] ">
                <iframe className="w-full h-full p-3" src="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTU0NTA=" title="Curso de Autenticidade"></iframe>
            </DialogContent>
        </Dialog>

    )
}

export const VerificationMecFatesp = () => {
    return (
        <Dialog>
            <DialogTrigger><img src={imgAuthMec} /></DialogTrigger>
            <DialogContent className="min-w-[80vw] h-[80vh] ">
                <iframe className="w-full h-full p-3" src="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTUyNzI=" title="Curso de Autenticidade"></iframe>
            </DialogContent>
        </Dialog>
    )
}