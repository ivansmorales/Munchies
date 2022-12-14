import React, { useState, useEffect } from "react";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./GeneratePdfStyles";

export const GeneratePdf = ({ data }: any) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOpen(true);
    return () => setOpen(false);
  });

  return (
    <>
      {open && (
        <Document>
          <Page wrap={false} size="A4" style={styles.page}>
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
        </Document>
      )}
    </>
  );
};
