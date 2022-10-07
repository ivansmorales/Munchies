import React from "react";
import ReactPDF, { Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./GeneratePdfStyles";

export const GeneratePdf = ({ data }: any) => {
  return (
    <ReactPDF.Document>
      <Page wrap size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="/template.png" style={styles.pageBackground} />
        </View>
        <View style={styles.section1}>
          <View style={styles.flexRow}>
            <Text style={styles.header}>NÚMERO DE PEDIDO:</Text>
            <Text>{data.name}</Text>
          </View>
        </View>
      </Page>
    </ReactPDF.Document>
  );
};
