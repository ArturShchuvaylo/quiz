// const url = "http://localhost:9000/questions";
const url2 =
  "https://raw.githubusercontent.com/ArturShchuvaylo/quiz/master/data/questions.json";

const fetchData = async () => {
  try {
    const response = await fetch(url2);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.questions;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default fetchData;
