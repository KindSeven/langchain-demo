import { Ollama } from "@langchain/community/llms/ollama";

const ollama = new Ollama({
  baseUrl: "http://localhost:11434", 
  model: "qwen2.5:14b", 
});

async function run() {
  try {
    console.log("正在调用模型...");
    const res = await ollama.invoke("讲个笑话");
    console.log("模型返回的结果：", res);
  } catch (error) {
    console.error("调用失败，错误信息：", error);
  }
}

run();