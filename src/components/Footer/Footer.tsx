import { Typographie } from "../common";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as WebIcon } from "../../assets/icons/web.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow_right.svg";

export function Footer() {
  return (
    <footer className="bg-dark-blue">
      <div className="container py-6">
        <div className="grid lg:grid-cols-4 gap-16  my-16">
          <ul className="space-y-6">
            <li>
              <img
                src="/images/logo_mono.png"
                alt="mobiling"
                height={45}
                width={120}
              />
            </li>
            <li>
              <Typographie className="text-white font-light text-sm">
                As an upscale and exclusive chauffeur and limousine service near
                Indonesia, we have been ensuring for more than 15 years that you
                get to your destination on time and safely.
              </Typographie>
            </li>
            <li className="flex space-x-6">
              <TwitterIcon />
              <FacebookIcon />
              <LinkedinIcon />
              <InstagramIcon />
            </li>
          </ul>

          <ul className="space-y-6">
            <li>
              <Typographie variant="h4" className="text-white h-11">
                Buy Vehicle
              </Typographie>
            </li>
            <li className="space-y-6">
              <Typographie className="text-white font-light">
                Find new car
              </Typographie>
              <Typographie className="text-white font-light">
                Current vehicle offers
              </Typographie>
              <Typographie className="text-white font-light">
                Price lists & brochures
              </Typographie>
            </li>
          </ul>

          <ul className="space-y-6">
            <li>
              <Typographie variant="h4" className="text-white h-11">
                Purchase advice
              </Typographie>
            </li>
            <li className="space-y-6">
              <Typographie className="text-white font-light">
                Book a test drive
              </Typographie>
              <Typographie className="text-white font-light">
                Find a dealer near you
              </Typographie>
              <Typographie className="text-white font-light">
                Find used vehicles
              </Typographie>
            </li>
          </ul>

          <ul className="space-y-6">
            <li>
              <Typographie variant="h4" className="text-white h-11">
                Customer Service
              </Typographie>
            </li>
            <li className="space-y-6">
              <Typographie className="text-white font-light">
                Current service offers
              </Typographie>
              <Typographie className="text-white font-light">
                Online service campaign VIN-checker
              </Typographie>
              <Typographie className="text-white font-light">
                5 Year staf service
              </Typographie>
              <Typographie className="text-white font-light">
                24h roadside assitance
              </Typographie>
              <Typographie className="text-white font-light">
                New and events
              </Typographie>
              <Typographie className="text-white font-light">
                Press relase
              </Typographie>
            </li>
          </ul>
        </div>
        <div className="border border-white" />
        <ul className="flex lg:flex-row flex-col gap-4 justify-between mt-6">
          <li>
            <Typographie className="text-white">
              Copyright 2023 Mobiling Co.
            </Typographie>
          </li>
          <li className="flex md:flex-row flex-col gap-4">
            <Typographie className="text-white font-light">
              Terms of Service
            </Typographie>
            <Typographie className="text-white font-light">
              Privacy Policy
            </Typographie>
            <Typographie className="text-white font-light">Cookies</Typographie>
          </li>
          <li className="flex space-x-2 items-center">
            <WebIcon />
            <Typographie className="text-white">English</Typographie>
            <ArrowRightIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
}
