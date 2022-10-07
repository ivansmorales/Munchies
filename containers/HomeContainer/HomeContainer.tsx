import React from "react";
import { pdf } from "@react-pdf/renderer";
import { GeneratePdf } from "../../components/GeneratePdf/GeneratePdf";
import { downloadClick } from "../../utils/utilFile";

export const HomeContainer = () => {
  const data = { name: "Ivan", age: 25 };

  const onSubmit = async (data: any) => {
    // const pdfData = <GeneratePdf data={data} />;
    // const pdfBlob = await pdf(pdfData).toBlob();
    // const fileName = `pedido_${data.id}`;
    // downloadClick(pdfBlob, fileName);
  };

  return (
    <div>
      <button onClick={() => onSubmit(data)}>Generate PDF</button>
      <GeneratePdf data={data} />
    </div>
  );
};
