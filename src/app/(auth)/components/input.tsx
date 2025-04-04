interface InputProps {
    label: string;
    type: string;
    placeholder: string;
}

export default function Input({ label, type, placeholder, }: InputProps) {
    return (
        <div className="mb-4">
            <label className="block text-white mb-2">
                {label}
            </label>
            <input
                type={type}
                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder={placeholder}
            />
        </div>
    );
}