export default function Button({ type, label }: {
    type: "button" | "submit" | "reset" | undefined,
    label: string
}) {
    return (
        <button
            type={type}
            className="w-full
            bg-dark5 text-dark3 py-2 rounded-lg hover:bg-dark3 hover:text-dark5 transition duration-300 
            dark:bg-dark3 dark:text-dark5 py-2 rounded-lg dark:hover:bg-dark5 dark:hover:text-dark3 transition duration-300"
        >
            {label}
        </button>
    );
}