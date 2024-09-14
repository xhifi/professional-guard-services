import transport from "utils/nodemailer";

export default async function handler(req, res) {
  try {
    const { name, phone, email, address, message } = req.body;
    if (req.method === "POST") {
      const mail = await transport.sendMail({
        from: email,
        to: "PGSFM SITE <info@pgsfm.uk>",
        subject: "SITE SUBMISSION - General Inquiry",
        html: `
        <h3>General Inquiry</h3>
        <p>Name: ${name}<br />
        Phone: ${phone}<br />
        Email: ${email}<br />
        Address: ${address}</p>
        <hr />
        <p>Message: ${message}</p>
      `,
      });

      if (mail.response.includes("OK")) {
        return res.status(200).json({ message: "Message sent successfully" });
      }
      return res.status(500).json({ error: "Something went wrong" });
    }
    if (req.method === "GET") {
      return res.status(200).json({ name: "BB" });
    }
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
