
import Image from "next/image";

const navItems = [
    "হোম",
    "রাজনীতি",
    "বিশ্ব",
    "অর্থনীতি",
    "স্বাস্থ্য",
    "খেলা",
    "প্রযুক্তি",
    "দেশজুড়ে",
];

export default function Header() {
    const date = new Intl.DateTimeFormat("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());

    return (
        <header className="w-full bg-white">
            {/* Main Header */}
            <div className="border-b border-gray-200">
                <div className="relative mx-auto max-w-7xl px-4">
                    {/* Logo and Title */}
                    <div className="flex min-h-[76px] items-center justify-center">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.webp"
                                width={42}
                                height={42}
                                alt="Bangla News 24 Logo"
                                className="h-10 w-10 rounded-xl object-contain"
                            />

                            <div>
                                <h1 className="text-2xl font-bold leading-tight text-red-700">
                                    Bangla News 24
                                </h1>
                                <p className="text-xs text-gray-500">
                                    {date}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Authentication Buttons */}
                    <div className="absolute right-4 top-4 hidden items-center gap-3 text-sm sm:flex">
                        <button className="font-medium text-gray-800 transition hover:text-red-700">
                            সাইন ইন
                        </button>

                        <button className="rounded bg-red-700 px-3 py-2 font-semibold text-white transition hover:bg-red-800">
                            সাইন আপ
                        </button>
                    </div>

                    {/* Mobile Authentication */}
                    <div className="flex justify-center gap-3 pb-3 sm:hidden">
                        <button className="rounded px-3 py-1.5 text-sm text-gray-800 hover:text-red-700">
                            সাইন ইন
                        </button>
                        <button className="rounded bg-red-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-800">
                            সাইন আপ
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center overflow-x-auto">
                        <ul className="flex items-center gap-5 whitespace-nowrap px-2 py-3 text-sm text-gray-800">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="transition hover:text-red-700"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Red News Bar */}
        </header>
    );
}