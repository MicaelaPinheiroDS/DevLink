export function Profile({userName, userAvatar}){
    return (
        <div id="profile" className="flex items-center flex-col">
            <img className="rounded-full w-28" src={userAvatar} alt=" user avater for github" />
            <p className="text-base font-medium">@{userName}</p>
        </div>
    )
}