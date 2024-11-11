"use client";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full h-32 bg-green-900">
      <div className="w-[1200px] flex justify-between items-center">
        <img
          className="rounded-full border-4 border-black"
          src="/logo.png"
          alt="footer logo"
          width={110}
          height={15}
        />

        <div className="text-sm text-white flex flex-col gap-1">
          <p
            className="cursor-pointer hover:text-red-200"
            onClick={() => {
              window.open("https://WatchStore.com", "_blank");
            }}
          >
            WatchStore.com
          </p>

          {/* Redes sociales con enlaces */}
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/WatchStore"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-red-200"
            >
              <i className="bx bxl-facebook-square text-xl"> Facebook</i>
            </a>

            
          </div>
        </div>
      </div>
    </footer>
  );
}




