"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    //   const { data: session } = useSession();
    
    const isUserLoggedIn = true
    const [toogleDropdown, setToogleDropdown] = useState(true);
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
        const response = await getProviders();
        setProviders(response);
        };
        setUpProviders();
    }, []);
    return (
        <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image
            src="/assets/images/logo.svg"
            alt="Promptopia logo"
            width={30}
            height={30}
            />
            <p className="logo_text">Promptopia</p>
        </Link>
        {/* Mobile Navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className="black_btn">
                Create Post
                </Link>
                <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
                </button>
                <Link href="/profile" className="">
                <Image
                    src='/assets/images/logo.svg'
                    width={37}
                    height={37}
                    className="rounded-full"
                    alt="profile"
                />
                </Link>
            </div>
            ) : (
            <>
                {providers &&
                Object.values(providers).map((provider) => (
                    <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                    Sign in
                    </button>
                ))}
            </>
            )}
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            isUserLoggedIn ? (
            <div className="flex">
                <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className="rounded-full cursor-pointer"
                alt="profile"
                onClick={() => setToogleDropdown((prev) => !prev)}
                />
                {toogleDropdown && (
                <div className="dropdown">
                    <Link
                    href="/"
                    className="dropdown_link"
                    onClick={() => setToogleDropdown(false)}
                    >
                    My Profile
                    </Link>
                    <Link
                    href="/"
                    className="dropdown_link"
                    onClick={() => setToogleDropdown(false)}
                    >
                    Create Prompt
                    </Link>
                    <button
                    type="button"
                    className="mt-5 w-full black_btn"
                    onClick={() => {
                        setToogleDropdown(false);
                        signOut();
                    }}
                    >
                    Sign Out
                    </button>
                </div>
                )}
            </div>
            ) : (
            <>
                {providers &&
                Object.values(providers).map((provider) => (
                    <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                    Sign in
                    </button>
                ))}
            </>
            )
        </div>
        </nav>
    );
};

export default Nav;