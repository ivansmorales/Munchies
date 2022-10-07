import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { downloadClick } from "../utils/utilFile";
import { pdf } from "@react-pdf/renderer";
import { GeneratePdf } from "../components/GeneratePdf/GeneratePdf";

const Home: NextPage = () => {
  const data = { name: "Ivan", age: 25 };

  const onSubmit = async (data: any) => {
    const pdfData = <GeneratePdf data={data} />;
    const pdfBlob = await pdf(pdfData).toBlob();
    const fileName = `pedido_${data.id}`;
    downloadClick(pdfBlob, fileName);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => onSubmit(data)}>Generate PDF</button>
    </div>
  );
};

export default Home;
