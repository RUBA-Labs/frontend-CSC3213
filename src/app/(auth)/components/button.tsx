export default function Button({ type,label }: { type: "button" | "submit" | "reset" | undefined ,label: string }) {
    return (
        <button type = {type} className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/40 transition duration-300">
            {label}
        </button>
    );
}