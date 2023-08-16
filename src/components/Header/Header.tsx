import { Navbar } from "../Navbar";
import { SearchInput } from "../SearchInput";
import { Typographie } from "../common";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

export function Header() {
  return (
    <header className="min-h-screen relative z-10 bg-light-blue">
      <section className="container">
        <Navbar />
        <div className="py-16">
          <Typographie variant="h1" className="mb-6 ">
            Best Car For your
            <br /> Performance
          </Typographie>
          <div className="grid md:grid-cols-12">
            <div className="col-span-5 flex flex-col justify-between gap-6">
              <div className=" flex flex-col space-y-6">
                <Typographie variant="h3" className="text-primary/50">
                  We will serve you to get dream car here easily and quickly
                  that is reliable
                </Typographie>
                <SearchInput />
              </div>
              <div>
                <Typographie variant="h2">BMW Series 3 BLUE</Typographie>
                <ul className="flex space-x-14 mb-6">
                  <li>
                    <Typographie variant="label">Base price</Typographie>
                    <Typographie className="font-extralight text-lg">
                      $ 41.87k
                    </Typographie>
                  </li>
                  <li>
                    <Typographie variant="label">Power</Typographie>
                    <Typographie className="font-extralight text-lg">
                      365 HP
                    </Typographie>
                  </li>
                  <li>
                    <Typographie variant="label">Engine</Typographie>
                    <Typographie className="font-extralight text-lg">
                      362 V6
                    </Typographie>
                  </li>
                </ul>
                <div className="h-[0.5px] bg-primary/40 relative after:absolute after:-right-[10px] after:-top-1 after:content-[''] after:aspect-square after:p-1 after:border-[1px] after:border-primary/40 after:rounded-full" />
              </div>
            </div>
            <div className="col-span-7 flex flex-col space-y-4 items-center after:content-[''] after:h-full after:w-80  after:absolute after:top-0 after:-z-10 after:bg-morphism/5">
              <div className="relative">
                <img
                  src="/images/rounded_text.png"
                  alt="text"
                  className="animate-spin"
                  style={{ animationDuration: "10s" }}
                />
                <StarIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
              </div>
              <img src="/images/bmw.png" alt="bmw series 3" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
