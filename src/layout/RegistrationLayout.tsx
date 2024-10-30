import { Link } from '@tanstack/react-router';
import Logo from '/images/Logo.webp';

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div >
                <Link to='/' className="flex items-center justify-center mt-4">
                    <img className="w-8" src={Logo} alt="logo" />
                    <h1 className="ml-2 text-3xl leading-tight tracking-wide text-[#004B6E] whitespace-nowrap">
                        AR Treasure Hunt
                    </h1>
                </Link>
            </div>
            {children}
        </>
    );
}
