import { useUser } from "../context/contextUser.jsx";

const CardUserProfile = () => {
    const { user } = useUser();

    return (
        <div className="relative w-full flex flex-row items-center justify-start gap-3 rounded bg-gray-800 overflow-hidden">
            <div className="flex items-center justify-center">
                <div className="w-15"></div>
                <img className="absolute -left-3.5 w-20 rounded-full select-none" src="/Images/Icono Dust.png" alt="UserIcon" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 p-1 overflow-hidden">
                <p className="text-xl">{user?.name}</p>
                <p className="text-sm">@{user?.username}</p>
            </div>
        </div>
    )
}

export default CardUserProfile;