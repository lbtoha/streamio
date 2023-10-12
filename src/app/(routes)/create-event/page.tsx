import CreateEventSection from "@/components/pages/create-event/CreateEventSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Create Event - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const createEvent = () => {
  return (
    <>
      <CreateEventSection />
    </>
  );
};

export default createEvent;
