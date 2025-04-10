import "../style/button.css";

export default function Button({ type, label }: {
    type: "button" | "submit" | "reset" | undefined,
    label: string
}) {
    return (
        <button
            type={type}
            className="button">
            {label}
        </button>
    );
}