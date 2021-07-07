import tableD from "../assets/tableData.csv";

export async function dataTable() {
  const ab = [];
  const t = await fetch(tableD);
  const d = await t.text();
  const tD = d.split("\n");
  var count = 0;
  for (var i = 0; i < tD.length; i++) {
    const tData = tD[i].split(",");
    count += 1;
    ab.push(tData);
  }

  const index = ab[0].length;
  const heading = ab[0];
  const len = index ;
  const tableLen = count - 1;
  ab.shift();
  const sData={
    "len":len,
    "heading":heading,
    "tablelen":tableLen,
    "dataR":ab
  }
 ;
  return sData;
}
