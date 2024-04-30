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
            <DialogContent className="bg-transparent text-white border-none shadow-none">
                <video className="w-full h-full p-3" src="https://conectaedu.com.br/video-sergio.mp4" controls autoPlay preload="auto" title="VideoPlayer"></video>
            </DialogContent>
        </Dialog>

    )
}