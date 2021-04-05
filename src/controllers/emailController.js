const sgMail= require('@sendgrid/mail')

module.exports = {
    async sendEmail(req, res) {
    
        const {from, to, subject, text, html} = req.body;
        const API_KEY = req.headers.authorization;

        sgMail.setApiKey(API_KEY)

        const message = {
            from,
            to,
            subject,
            text,
            html
        }
        
        sgMail.send(message)
            .then(response => {
                return res.json({ data: response });
            })
            .catch(error => {
                return res.json({ data: error });
            })
    },
    
    hello(req, res) {
        return res.json({ id: "funcionou" });
    }
}




 