import { NextRequest } from "next/server";
import comments from "./data";

export const GET = (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  console.log("parmas => ", params);
  const query = req.nextUrl.searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
};

export const POST = async (req: NextRequest) => {
  console.log("body used", req.bodyUsed);
  const body = await req.json();
  console.log("body used", req.bodyUsed);
  console.log("body", body);
  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(newComment);
  return Response.json(newComment);
};
