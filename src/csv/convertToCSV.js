function convertToCSV(answers) {
  const headers = ["order", "title", "type", "answer"];
  const rows = [headers.join(",")];

  answers.forEach((answer) => {
    const { order, title, type, answer: userAnswer } = answer;
    const row = [order, title, type, userAnswer].map((value) => {
      if (typeof value === "string") {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    rows.push(row.join(","));
  });
  return rows.join("\n");
}

const downloadCSV = (answers, filename) => {
  const csv = convertToCSV(answers);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export { downloadCSV, convertToCSV };
