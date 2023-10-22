import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

const ViewAll = () => {
  return (
    <Link
      href="artist-allsong"
      className="view__btn white d-flex align-items-center gap-2"
    >
      View All
      <IconArrowNarrowRight />
    </Link>
  );
};

export default ViewAll;
