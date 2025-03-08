import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: '20px',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: '20px',
  },
  table: {
    flexDirection: 'column',
    marginTop: '10px',
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: '5px',
  },
  tableCell: {
    padding: '5px',
  },
});

const MyDocument = ({ month }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>{`${month.monthNumber}, ${month.monthYear}`}</Text>
      {month.tables.map((table, tableIndex) => (
        <View key={tableIndex} style={styles.table}>
          <Text style={{ ...styles.tableCell, fontWeight: 'bold' }}>{table.tableName}</Text>
          {table.rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.date}</Text>
              <Text style={styles.tableCell}>{row.name}</Text>
              <Text style={styles.tableCell}>{row.amount}</Text>
            </View>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default MyDocument;
