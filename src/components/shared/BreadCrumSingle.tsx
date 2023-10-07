import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

const BreadCrumSingle = ({ page }: { page: string }) => {
  return (
    // <!--breadcrumnd banner-->
    <section className="breadcrumnd__banner custom__space mr-24 ml-24">
      <div className="container-flud p-0">
        <ul className="breadcrund__content mb-40 d-flex gap-1 flex-wrap align-items-center">
          <li className="fs-16 bodyfont fw-500">
            <Link href="/" className="pra">
              Home
            </Link>
          </li>
          <li>
            <IconChevronRight className="white" />
          </li>
          <li className="white fw-500 fs-16 bodyfont">{page}</li>
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumSingle;
