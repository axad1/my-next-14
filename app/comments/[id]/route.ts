import { NextRequest } from "next/server";
import comments from "../data";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  console.log("headers = > ", req.headers.get("user-agent"));
  const headersList = headers();
  console.log("headersList = > ", headersList.get("User-Agent"));
  const id = context.params.id;
  const comment = comments.find((c) => c.id === parseInt(id));
  return comment ? Response.json(comment) : redirect("/");
};

export const DELETE = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const id = context.params.id;
  const idx = comments.findIndex((comment) => comment.id === parseInt(id));
  if (idx === -1) return new Response("Not found");
  const comment = comments.splice(idx, 1);
  return Response.json(comment);
};

export const PATCH = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const idx = comments.findIndex((c) => c.id === +id);
  if (idx === -1) return Response.json("comment not found");
  const body = await req.json();
  comments[idx] = {
    ...comments[idx],
    text: body.text ?? "",
  };
  return Response.json(comments[idx]);
};
