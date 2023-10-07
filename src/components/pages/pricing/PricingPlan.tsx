"use client";

import { IconCheck, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

const PricingPlan = () => {
  const [toggleSlide, setToggleSlide] = useState(true);
  const [enabled, setEnabled] = useState(false);

  return (
    <section className="price__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        <div id="js-pricing-switch" className="text-center relative mb-40">
          <h2 className="white mb-16">Pricing Plan</h2>
          <p className="pra fs-18 fw-400 bodyfont mb-30">
            Choose a plan tailored to your needs
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <span
              className={`switch-label js-switch-label-monthly ${
                enabled ? "" : "active"
              }`}
            >
              Monthly
            </span>

            <ToggleButton enabled={enabled} setEnabled={setEnabled} />
            <span
              className={`switch-label js-switch-label-yearly  ${
                enabled ? "active" : ""
              }`}
            >
              Yearly
            </span>
          </div>
          <div className="save-money--mobile mt-3">
            Save 10% on Yearly Plans
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="pricing__item">
              <span className="fs-16 fw-500 base d-block bodyfont mb-10">
                Proffestional
              </span>
              <div className="price__count d-flex align-items-end">
                <div className="adjust fs-24 fw-600 bodyfont">
                  <span className="dollar">$ </span>
                  <span
                    className="price-card--price-number fs-24 fw-600 bodyfont js-toggle-price-content odometer"
                    data-price-monthly="199"
                    data-price-yearly="109"
                  >
                    0
                  </span>
                </div>
                <span className="fs-16 month fw-500 bodyfont pra">/month</span>
              </div>
              <ul className="pricing__list mt-24 mb-40">
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Streamio Originals
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Switch plans or cancel anytime
                </li>
                <li className="d-flex gap-2 pra fs-16 bodyfont fw-400 align-items-center">
                  <IconX className="fs-16 praborder pra" />
                  Stream 65+ top Live
                </li>
                <li className="d-flex gap-2 pra fs-16 bodyfont fw-400 align-items-center">
                  <IconX className="fs-16 praborder pra" />
                  Music channels
                </li>
                <li className="d-flex gap-2 pra fs-16 bodyfont fw-400 align-items-center">
                  <IconX className="fs-16 praborder pra" />
                  Download Songs
                </li>
                <li className="d-flex gap-2 pra fs-16 bodyfont fw-400 align-items-center">
                  <IconX className="fs-16 praborder pra" />
                  Unlimited Max Upload
                </li>
              </ul>
              <Link
                href="#0"
                className="pricing__btn blackbg d-block base fs-16 fw-500 bodyfont w-100 text-center"
              >
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="pricing__item before__price ralt">
              <span className="fs-16 fw-500 base2 d-block bodyfont mb-10">
                Business
              </span>
              <div className="price__count d-flex align-items-end">
                <div className="adjust fs-24 base2 fw-600 bodyfont">
                  <span className="dollar">$ </span>
                  <span
                    className="price-card--price-number fs-24 fw-600 bodyfont js-toggle-price-content odometer"
                    data-price-monthly="599"
                    data-price-yearly="109"
                  >
                    {enabled ? 109 : 499}
                  </span>
                </div>
                <span className="fs-16 month fw-500 bodyfont pra">/month</span>
              </div>
              <ul className="pricing__list mt-24 mb-40">
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Streamio Originals
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Switch plans or cancel anytime
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Stream 65+ top Live
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Music channels
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Download Songs
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Unlimited Max Upload
                </li>
              </ul>
              <Link
                href="#0"
                className="pricing__btn basebg2 d-block white fs-16 fw-500 bodyfont w-100 text-center"
              >
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="pricing__item">
              <span className="fs-16 fw-500 base3 d-block bodyfont mb-10">
                Enterprise
              </span>
              <div className="price__count d-flex align-items-end">
                <div className="adjust fs-24 fw-600 bodyfont">
                  <span className="dollar">$ </span>
                  <span
                    className="price-card--price-number fs-24 fw-600 bodyfont js-toggle-price-content odometer"
                    data-price-monthly="17"
                    data-price-yearly="109"
                  >
                    {enabled ? 205 : 599}
                  </span>
                </div>
                <span className="fs-16 month fw-500 bodyfont pra">/month</span>
              </div>
              <ul className="pricing__list mt-24 mb-40">
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Streamio Originals
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Switch plans or cancel anytime
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Stream 65+ top Live
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Music channels
                </li>
                <li className="d-flex gap-2 pra fs-16 bodyfont fw-400 align-items-center">
                  <IconX className="fs-16 praborder pra" />
                  Download Songs
                </li>
                <li className="d-flex gap-2 pra fs-16 bodyfont fw-400 align-items-center">
                  <IconX className="fs-16 praborder pra" />
                  Unlimited Max Upload
                </li>
              </ul>
              <Link
                href="#0"
                className="pricing__btn blackbg d-block base3 fs-16 fw-500 bodyfont w-100 text-center"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
