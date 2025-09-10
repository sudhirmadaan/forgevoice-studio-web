"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main
      id="system-page-wrapper"
      className="relative flex h-screen items-center justify-center bg-black text-white"
    >
      {/* Aurora background */}
      <div className="aurora-background absolute inset-0"></div>

      {/* Login Card */}
      <div className="system-narrative-card relative z-10 w-full max-w-md p-8 rounded-2xl shadow-lg animate-fade-in-up">
        <h1 className="text-3xl font-bold text-center text-yellow-400">
          Welcome to ForgeVoice Studio
        </h1>
        <p className="mt-2 text-center text-gray-300">
          Build, manage, and scale your voice applications effortlessly.
        </p>

        {!session ? (
          <div className="mt-6 flex flex-col gap-3">
            {/* Google Login */}
            <button
              onClick={() => signIn("google")}
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              Continue with Google
            </button>

            {/* Guest Login */}
            <Link href="/dashboard">
              <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
                Continue as Guest
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-3">
            <p className="text-center text-gray-200">
              Signed in as{" "}
              <span className="font-medium text-yellow-400">
                {session.user?.name}
              </span>
            </p>

            <Link href="/dashboard">
              <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition">
                Go to Dashboard
              </button>
            </Link>

            <button
              onClick={() => signOut()}
              className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-gray-400">
          By continuing, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-200">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-gray-200">
            Privacy Policy
          </a>.
        </p>
      </div>
    </main>
  )
}