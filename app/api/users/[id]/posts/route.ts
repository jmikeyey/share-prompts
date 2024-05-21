import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await Prompt.find({
      creator: params.id,
    });
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
