import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import capaVideo from "../../assets/play.png";

export const VideoPlayer = () => {
    return (
        <Dialog>
            <DialogTrigger><img src={capaVideo} width={700} alt="Capa do Vídeo" /></DialogTrigger>
            <DialogContent className="bg-transparent text-white border-none shadow-none flex justify-center items-center">
                <iframe className="w-[350px] h-[600px] p-3 md:w-[450px] md:h-[800px]" src="https://www.youtube.com/embed/6YslpVvRHgk?autoplay=1" title="Elimine Matérias Pendentes em 7 Dias - 100% EaD!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </DialogContent>
        </Dialog>

    )
}