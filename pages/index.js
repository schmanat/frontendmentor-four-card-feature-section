import Head from "next/head";
import Card from "../components/Card";
import SupervisorIcon from "../public/assets/images/icon-supervisor.svg";
import TeamBuilderIcon from "../public/assets/images/icon-team-builder.svg";
import KarmaIcon from "../public/assets/images/icon-karma.svg";
import CalculatorIcon from "../public/assets/images/icon-calculator.svg";

export default function Home() {
  return (
    <div className="bg-gray-very-light font-poppins min-h-screen flex items-center justify-center">
      <Head>
        <title>frontendmentor :: four card feature section</title>
        <meta
          name="description"
          content="frontendmentor four card feature section"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <section className="w-80 lg:w-[1110px] text-center mt-20 lg:mt-0">
        <div className="w-[300px] lg:w-[500px] lg:mx-auto">
          <h1 className="font-extralight text-2xl text-blue-very-dark">
            Reliable, efficient delivery
          </h1>
          <h2 className="font-bold text-blue-very-dark text-2xl">
            Powered by Technology
          </h2>
          <p className="font-extralight text-sm mt-4 text-blue-grayish">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensurce that your projects is successful
          </p>
        </div>
        <div className="my-20 flex flex-col space-y-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-center lg:space-y-0">
          <div>
            <Card
              title="Supervisor"
              description="Monitors activity to identify project roadblocks"
              icon={SupervisorIcon}
              variant="cyan"
            />
          </div>
          <div>
            <Card
              title="Team Builder"
              description="Scans our talent network to create the optimal team for your project"
              icon={TeamBuilderIcon}
              variant="red"
            />
            <Card
              className="mt-6 "
              title="Karma"
              description="Regularly evaluates our talent to ensure quality"
              icon={KarmaIcon}
              variant="orange"
            />
          </div>
          <div>
            <Card
              title="Calculator"
              description="Uses data from past projects to provide better delivery estimates"
              icon={CalculatorIcon}
              variant="blue"
            />
          </div>
        </div>
        {/* <div className="mt-20 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8">
          <Card
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            icon={SupervisorIcon}
            variant="cyan"
          />
          <Card
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            icon={TeamBuilderIcon}
            variant="red"
          />
          <Card
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            icon={KarmaIcon}
            variant="orange"
          />
          <Card
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            icon={CalculatorIcon}
            variant="blue"
          />
        </div> */}
      </section>
    </div>
  );
}
