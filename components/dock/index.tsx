import DockItem from "./DockItem";

export default function Dock() {
    return (
        <div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 flex gap-4 items-end bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg
                "
        >
            <DockItem src="/icons/settings-icon.png" alt="Settings" />
            <DockItem src="/icons/settings-icon.png" alt="Settings" />
            <DockItem src="/icons/settings-icon.png" alt="Settings" />
        </div>
    );
}
