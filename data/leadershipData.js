import RegistrarMessage from "@/components/leadership/RegistrarMessage";
import ViceChacellorMessage from "@/components/leadership/ViceChacellorMessage";

export const LeadershipData = [
    {
        slug: 'vice-chancellor-message',
        name: "Vice Chancellor's Message",
        content: <ViceChacellorMessage />
    },
    {
        slug: 'registrar-message',
        name: "Registrar Message",
        content: <RegistrarMessage/>
    },
]