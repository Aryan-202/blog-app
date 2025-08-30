const { NextResponse } = require("next/server");





async function GET(req) {
 console.log("GET request received at /api/blog");
 return NextResponse.json({ message: "GET request received at /api/blog" });
}

export { GET };