import AudioPlayerModal from "@/components/pages/explore/AudioPlayerModal";
import AddToPlaylistModal from "@/components/shared/AddToPlaylistModal";
import DeletePostModal from "@/components/shared/DeletePostModal";
import MainBody from "@/components/shared/MainBody";
import ReportModal from "@/components/shared/ReportModal";
import SharedModal from "@/components/shared/SharedModal";
import { poppins } from "@/utils/fonts";
import { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/scss/scrollbar";
import ".././styles/sass/main.scss";
import Loader from "./Loader";

export const metadata: Metadata = {
  title:
    "Streamio - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <MainBody>
          <main>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </main>
        </MainBody>
        <AddToPlaylistModal />
        <SharedModal />
        <DeletePostModal />
        <ReportModal />
        <Toaster />
        <AudioPlayerModal />
      </body>
    </html>
  );
}
