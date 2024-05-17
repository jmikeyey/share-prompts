import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export async function GET(req: Request) {
  try {
    await connectToDB();
    const data = await Prompt.find().populate("creator");
    return new Response(JSON.stringify(data), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Error Occured", {
      status: 500,
    });
  }
}
