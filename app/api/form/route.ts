// app/api/apply/route.ts
export const runtime = "nodejs"; // ensures File / formData support on the server

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const fullName = String(form.get("fullName") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const serviceInterest = String(form.get("serviceInterest") || "");
    const resume = form.get("resume") as File | null;

    if (!fullName || !email) {
      return new Response("Missing required fields", { status: 400 });
    }

    // (Optional) Read resume bytes if you plan to upload/email later:
    // const resumeBytes = resume ? Buffer.from(await resume.arrayBuffer()) : null;

    // For now, just log to verify it works:
    console.log("[/api/apply]", {
      fullName,
      email,
      phone,
      serviceInterest,
      hasResume: !!resume,
      resumeName: resume?.name,
      resumeType: resume?.type,
      resumeSize: resume?.size,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("POST /api/apply failed:", err);
    return new Response("Server error", { status: 500 });
  }
}
