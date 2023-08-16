import { Typographie, Card, Button } from "../common";
import { ReactComponent as ChevronRightIcon } from "../../assets/icons/chevron_right.svg";
import { ReactComponent as CarIcon } from "../../assets/icons/car.svg";
import { ReactComponent as PointerIcon } from "../../assets/icons/touchscreen.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as LocalisationIcon } from "../../assets/icons/location.svg";
import { ReactNode } from "react";

const DATA = [
  {
    icon: <CarIcon />,
    label: (
      <>
        From business <br /> to Luxuryclass
      </>
    ),
  },
  {
    icon: <LocalisationIcon />,
    label: (
      <>
        125 Location <br /> in Indonesia
      </>
    ),
  },
  {
    icon: <PointerIcon />,
    label: (
      <>
        Convenient <br /> Online Book
      </>
    ),
  },
  {
    icon: <ClockIcon />,
    label: (
      <>
        24/7 Exclusive <br /> On the road
      </>
    ),
  },
];

function renderCardElements(icon: ReactNode, text: ReactNode) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <Typographie
        variant="label"
        className="text-gray-700 font-medium text-xs"
      >
        {text}
      </Typographie>
    </div>
  );
}

export function MobileSocial() {
  return (
    <main className="container my-16">
      <Typographie variant="h2">Mobiling Social</Typographie>
      <Card className="text-white bg-gradient-to-b my-6 from-slate-300 to-black">
        <Card.Content className="border border-white border-dashed p-4 pt-24 flex flex-col space-y-3">
          <Card.Title className="text-white" variant="h2">
            Information on data processing
          </Card.Title>
          <Typographie className="text-white font-light text-sm">
            On our website we provide content from Storystream. To view this
            content, you must <br /> agree to the data processing by
            Storystream.
          </Typographie>
          <div className="flex flex-wrap gap-4">
            <Button
              className="font-light px-4 rounded-none bg-gray-700"
              icon={<ChevronRightIcon />}
            >
              Agree
            </Button>
            <Button
              className="font-light px-4 rounded-none bg-gray-700"
              icon={<ChevronRightIcon />}
            >
              Information on data privacy
            </Button>
          </div>
        </Card.Content>
      </Card>
      <div className="my-16 grid lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Typographie variant="h2">About Us</Typographie>
          <Typographie variant="h3" className="text-2xl">
            Find out briedfly but informatively
          </Typographie>
          <Typographie className="pt-8 text-sm">
            As an upscale and exclusive chauffeur and limousine service near
            Indonesia, we have been ensuring for more than 15 years that you get
            to your destination on time and safely. We sell in around Indonesia
            , as well as beyond to destinations throughout World. From the
            Indonesia to shuttle service, you can look forward to a professional
            team and comfort of our car service.
          </Typographie>
        </div>
        <Card className="bg-gray-200 lg:w-[400px] w-full lg:justify-self-end">
          <Card.Content className="grid grid-cols-2 gap-8 text-center">
            {DATA.map((item) => renderCardElements(item.icon, item.label))}
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
