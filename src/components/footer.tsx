export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-0 fixed bottom-0 bg-transparent text-dark5 dark:text-dark3 py-1 rounded-sm transition duration-300">
      <p className="text-center text-sm">© {new Date().getFullYear()} RUBA-labs. All rights reserved.</p>
    </footer>
  );
}


