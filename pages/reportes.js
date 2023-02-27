import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ContainerContent from "../components/containerContent";

const reportes = () => {
  const PowerBiReport = dynamic(() =>
    import("../components/PowerBiReport").then((powerBi) => powerBi.default)
  );

  return (
    <ContainerContent pageTitle={"Reportes"}>
      <div className="m-6 flex flex-col gap-16">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Reportes</h1>
        </div>
        <PowerBiReport />
      </div>
    </ContainerContent>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: [1],
    },
  };
}

export default reportes;
