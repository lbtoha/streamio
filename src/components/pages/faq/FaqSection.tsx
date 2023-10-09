import { IconArrowNarrowRight } from "@tabler/icons-react";

const FaqSection = () => {
  return (
    <section className="faq__section pr-24 pl-24 pb-80">
      <div className="container">
        <h3 className="white mb-30">Faq</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-3 col-xl-4 col-lg-4">
            <div className="faq__tabs round16">
              <ul className="nav d-grid nav-tabs" id="myTab2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-flex align-items-center gap-3 active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    aria-label="home-tab"
                  >
                    <span className="white fs-18 fw-500 bodyfont">
                      Token Pre-Sale
                    </span>
                    <IconArrowNarrowRight className="fs-24 white" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-flex align-items-center gap-3"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    aria-label="profile-tab"
                  >
                    <span className="white fs-18 fw-500 bodyfont">
                      Staking & Farming
                    </span>
                    <IconArrowNarrowRight className="fs-24 white" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-flex align-items-center gap-3"
                    id="contact-tab"
                    aria-label="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <span className="white fs-18 fw-500 bodyfont">
                      Ecosystem
                    </span>
                    <IconArrowNarrowRight className="fs-24 white" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-flex align-items-center gap-3"
                    id="contact-tabnew"
                    data-bs-toggle="tab"
                    data-bs-target="#contactnew"
                    type="button"
                    role="tab"
                    aria-controls="contactnew"
                    aria-selected="false"
                    aria-label="contact-tab"
                  >
                    <span className="white fs-18 fw-500 bodyfont">
                      Platform
                    </span>
                    <IconArrowNarrowRight className="fs-24 white" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-flex align-items-center gap-3"
                    id="contact-tabmap"
                    data-bs-toggle="tab"
                    data-bs-target="#contactmap"
                    type="button"
                    role="tab"
                    aria-controls="contactmap"
                    aria-selected="false"
                    aria-label="contact tab button"
                  >
                    <span className="white fs-18 fw-500 bodyfont">
                      Roadmaps & Goals
                    </span>
                    <IconArrowNarrowRight className="fs-24 white" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="faq__components round16 mainbg">
                  <div className="accordion" id="accordionExample">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid4">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn4"
                              aria-expanded="true"
                              aria-controls="collapsecmn4"
                              aria-label="button"
                            >
                              What is Swapify ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn4"
                            className="accordion-collapse collapse show"
                            aria-labelledby="cmnid4"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid5">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn5"
                              aria-expanded="false"
                              aria-controls="collapsecmn5"
                              aria-label="button"
                            >
                              How we can buy and invest token ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn5"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid5"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid6">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn6"
                              aria-expanded="false"
                              aria-controls="collapsecmn6"
                              aria-label="button"
                            >
                              How secure is this token ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn6"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid6"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn1"
                              aria-expanded="false"
                              aria-controls="collapsecmn1"
                              aria-label="button"
                            >
                              What are long-tail and short-tail assets ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn1"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid1"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn2"
                              aria-expanded="false"
                              aria-controls="collapsecmn2"
                              aria-label="button"
                            >
                              What is your contract address ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn2"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid2"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="faq__components round16 mainbg">
                  <div className="accordion" id="accordionExample2">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="highid4">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsehighid4"
                              aria-expanded="true"
                              aria-controls="collapsehighid4"
                              aria-label="button"
                            >
                              What is Swapify ?
                            </button>
                          </h2>
                          <div
                            id="collapsehighid4"
                            className="accordion-collapse collapse"
                            aria-labelledby="highid4"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid12">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn12"
                              aria-expanded="false"
                              aria-controls="collapsecmn12"
                              aria-label="button"
                            >
                              What are long-tail and short-tail assets ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn12"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid12"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid13">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn13"
                              aria-expanded="false"
                              aria-controls="collapsecmn13"
                              aria-label="button"
                            >
                              How secure is this token ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn13"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid13"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid3">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn3"
                              aria-expanded="false"
                              aria-controls="collapsecmn3"
                              aria-label="button"
                            >
                              What is Swapify ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn3"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid3"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid114">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn14"
                              aria-expanded="false"
                              aria-controls="collapsecmn14"
                              aria-label="button"
                            >
                              How we can buy and invest token ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn14"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid114"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="faq__components round16 mainbg">
                  <div className="accordion" id="accordionExample3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="sportid4">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsesport4"
                              aria-expanded="true"
                              aria-controls="collapsesport4"
                              aria-label="button"
                            >
                              What is your contract address ?
                            </button>
                          </h2>
                          <div
                            id="collapsesport4"
                            className="accordion-collapse collapse"
                            aria-labelledby="sportid4"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="sportid5">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsesport5"
                              aria-expanded="false"
                              aria-controls="collapsesport5"
                            >
                              What are long-tail and short-tail assets ?
                            </button>
                          </h2>
                          <div
                            id="collapsesport5"
                            className="accordion-collapse collapse"
                            aria-labelledby="sportid5"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="sportid6">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsesport6"
                              aria-expanded="false"
                              aria-controls="collapsesport6"
                            >
                              How secure is this token ?
                            </button>
                          </h2>
                          <div
                            id="collapsesport6"
                            className="accordion-collapse collapse"
                            aria-labelledby="sportid6"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="sportid1">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsesport1"
                              aria-expanded="false"
                              aria-controls="collapsesport1"
                            >
                              How we can buy and invest token ?
                            </button>
                          </h2>
                          <div
                            id="collapsesport1"
                            className="accordion-collapse collapse"
                            aria-labelledby="sportid1"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="sportid2">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsesport2"
                              aria-expanded="false"
                              aria-controls="collapsesport2"
                            >
                              What is Swapify ?
                            </button>
                          </h2>
                          <div
                            id="collapsesport2"
                            className="accordion-collapse collapse"
                            aria-labelledby="sportid2"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contactnew"
                role="tabpanel"
                aria-labelledby="contact-tabnew"
              >
                <div className="faq__components round16 mainbg">
                  <div className="accordion" id="accordionExample4">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="worldleid4">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseleague4"
                              aria-expanded="true"
                              aria-controls="collapseleague4"
                            >
                              What is Swapify ?
                            </button>
                          </h2>
                          <div
                            id="collapseleague4"
                            className="accordion-collapse collapse"
                            aria-labelledby="worldleid4"
                            data-bs-parent="#accordionExample4"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="worldleid5">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseleague5"
                              aria-expanded="false"
                              aria-controls="collapseleague5"
                            >
                              How we can buy and invest token ?
                            </button>
                          </h2>
                          <div
                            id="collapseleague5"
                            className="accordion-collapse collapse"
                            aria-labelledby="worldleid5"
                            data-bs-parent="#accordionExample4"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="worldleid6">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseleague6"
                              aria-expanded="false"
                              aria-controls="collapseleague6"
                            >
                              How secure is this token ?
                            </button>
                          </h2>
                          <div
                            id="collapseleague6"
                            className="accordion-collapse collapse"
                            aria-labelledby="worldleid6"
                            data-bs-parent="#accordionExample4"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="worldleid1">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseleague1"
                              aria-expanded="false"
                              aria-controls="collapseleague1"
                            >
                              What are long-tail and short-tail assets ?
                            </button>
                          </h2>
                          <div
                            id="collapseleague1"
                            className="accordion-collapse collapse"
                            aria-labelledby="worldleid1"
                            data-bs-parent="#accordionExample4"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="worldleid2">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseleague2"
                              aria-expanded="false"
                              aria-controls="collapseleague2"
                            >
                              What is your contract address ?
                            </button>
                          </h2>
                          <div
                            id="collapseleague2"
                            className="accordion-collapse collapse"
                            aria-labelledby="worldleid2"
                            data-bs-parent="#accordionExample4"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contactmap"
                role="tabpanel"
                aria-labelledby="contact-tabmap"
              >
                <div className="faq__components round16 mainbg">
                  <div className="accordion" id="accordionExample5">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid7">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn7"
                              aria-expanded="false"
                              aria-controls="collapsecmn7"
                            >
                              How secure is this token ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn7"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid7"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid8">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn8"
                              aria-expanded="false"
                              aria-controls="collapsecmn8"
                            >
                              What are long-tail and short-tail assets ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn8"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid8"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid9">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn9"
                              aria-expanded="false"
                              aria-controls="collapsecmn9"
                            >
                              What is your contract address ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn9"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid9"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid10">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn10"
                              aria-expanded="true"
                              aria-controls="collapsecmn10"
                            >
                              What are the biggest risks to your growth ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn10"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid10"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="cmnid11">
                            <button
                              className="accordion-button collapsed"
                              aria-label="button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsecmn11"
                              aria-expanded="false"
                              aria-controls="collapsecmn11"
                            >
                              What is your contract address ?
                            </button>
                          </h2>
                          <div
                            id="collapsecmn11"
                            className="accordion-collapse collapse"
                            aria-labelledby="cmnid11"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                One of the key characteristics of NFTs is their
                                ability to prove authenticity, ownership, and
                                scarcity in the digital realm. Each NFT contains
                                metadata that defines its distinct features,
                                provenance, and ownership This metadata is
                                stored on the blockchain, making it tamper-proof
                                and verifiable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
