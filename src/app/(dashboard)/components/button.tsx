export default function Button({ type, label, onClick, className }: {
    type: "button" | "submit" | "reset" | undefined,
    label: string,
    onClick?: () => void,
    className?: string
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${className || ''}`}>
            {label}
        </button>
    );
}