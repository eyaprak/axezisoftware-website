import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const { email, message, name, phone } = req.body;
    const msg = {
        to: 'info@axezisoftware.com',
        from: 'info@axezisoftware.com',
        subject: 'A New Message From Contact Form! ' + email || '',
        name,
        text: `
        Email: ${email || ''}
        Name: ${name || ''}
        Message: ${message || ''}
        Phone: ${phone || ''}
    `,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: true, message: 'En kısa süre içerisinde sizlere dönüş sağlayacağız.' });
    } catch (error) {
        console.log(error.response.body.errors);
        res.status(500).json({ success: false, message: 'Error sending email' });
    }
};