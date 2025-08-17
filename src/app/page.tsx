import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100">
      <main className="flex flex-col gap-8 items-center text-center">
        
        {/* Birthday Image */}
        <Image
          src="/birthday-cake.png" // put a birthday cake image in public folder
          alt="Birthday Cake"
          width={220}
          height={220}
          className="drop-shadow-lg"
          priority
        />

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-purple-800 drop-shadow-md">
          🎉 Happy Birthday, Kaushal! 🎂
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
          Wishing you a fantastic day filled with joy, laughter, and wonderful memories. 
          May all your dreams come true this year ✨
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0" // example: birthday playlist
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-medium shadow-md transition"
          >
            🎶 Play Birthday Songs
          </a>
          <a
            href="https://www.canva.com/cards/templates/birthday/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 text-lg font-medium shadow-md transition"
          >
            🎁 Send Wishes
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-600">
        Made with ❤️ using Next.js
      </footer>
    </div>
  );
}
