import { IconPlayerPlay, IconShare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const PodcastAllSongSection = () => {
  return (
    <section className="genres__section custom__space pr-24 pl-24 pb-80">
      <div className="container-fluid">
        <div className="artist__allhead d-flex">
          <Image
            width={390}
            height={390}
            src="/img/pocast/podcasting.jpg"
            alt="img"
            className="h-auto flex-shrink-0"
          />
          <div className="artist__allcontent">
            <h3 className="white mb-10">Chester Bennington</h3>
            <span className="white fs-20 mb-16 fw-500 d-block">NLE Chappa</span>
            <p className="fs-16 bodyfont pra mb-10">
              Chester Bennington&apos;s legacy continues through his music, and
              he is remembered as a talented and influential artist who touched
              the lives of many with his emotive performances and deeply
              personal lyrics. His impact on the music industry and his devoted
              fan base endures, making him an unforgettable figure in the world
              of rock music.
            </p>
            <ul className="artist__list mb-20">
              <li>Theme Forest</li>
              <li>3D Ocean</li>
              <li>Graphic River</li>
              <li>Code Canayon</li>
            </ul>
            <p className="pra fs-16 mb-10">
              In 1993, he joined the band Grey Daze as their lead vocalist and
              released two albums with them before departing in 1998. Later, in
              1999, Chester Bennington joined Linkin Park, a band formed by Mike
              Shinoda and Brad Delson, and became one of its most iconic
              members.
            </p>
            <div className="d-flex mt-24 align-items-center gap-4">
              <Link href="signin" className="cmbtn d-flex gap-2">
                <span>
                  <IconPlayerPlay className="fs-24 base" />
                </span>
                <span>Play</span>
              </Link>
              <Link href="signin" className="cmbtn d-flex gap-2">
                <span>
                  <IconShare className="fs-24 base" />
                </span>
                <span>Share</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastAllSongSection;
