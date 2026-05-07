import * as msal from '@azure/msal-node';

export class AzureTransport {
    constructor(config) {
        this.name = 'Azure';
        this.version = '0.1';
        this.config = config;
        this.graphEndpoint = `https://graph.microsoft.com`;
        this.tokenInfo = null;

        //msal client 
        this.msalClient = new msal.ConfidentialClientApplication({
            auth: {
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                authority: `https://login.microsoftonline.com/${config.tenantId}`,
            },
        });
    }
    //returns true if the cached token has expired
    isTokenExpired() {
        if (!this.tokenInfo?.expiresOn) return false;
        return Date.now() > this.tokenInfo.expiresOn.getTime();
    }
    //fetch new token from Azure AD or returns the cached token
    async getAccessToken() {
        if (!this.tokenInfo || this.isTokenExpired()) {
            this.tokenInfo = await this.msalClient.acquireTokenByClientCredential({
                scopes: [`${this.graphEndpoint}/.default`],
            });
            if (!this.tokenInfo?.accessToken) {
                throw new Error('Failed to acquire access token from Azure.');
            }
        }
        return this.tokenInfo.accessToken;
    }
    //called by nodemailer when sendMail() in invoked
    async send(mail, callback) {
        try {
            const { subject, from, to, replyTo, text, html } = mail.data;
            if (!from || !to) throw new Error("Missing 'from' or 'to' address.");

            const extractEmail = (str) => {
                const match = str?.match(/<(.+?)>/);
                return match ? match[1] : str;
            };
            const fromAddress = extractEmail(from);
            const accessToken = await this.getAccessToken();

            const response = await fetch(
                `${this.graphEndpoint}/v1.0/users/${fromAddress}/sendMail`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: {
                            subject,
                            from: { emailAddress: { address: fromAddress } },
                            toRecipients: Array.isArray(to)
                                ? to.map(r => ({ emailAddress: { address: extractEmail(r) } }))
                                : [{ emailAddress: { address: extractEmail(to) } }],
                            replyTo: replyTo
                                ? [{ emailAddress: { address: extractEmail(replyTo) } }]
                                : undefined,
                            body: {
                                content: html || text || '',
                                contentType: html ? 'HTML' : 'Text',
                            },
                        },
                        saveToSentItems: true,
                    }),
                }
            );
            if (!response.ok) {
                const err = await response.text();
                throw new Error(`Graph API error: ${response.status} - ${err}`);
            }
            callback(null, { message: "Email accepted by Microsoft Graph" });
        } catch (error) {
            callback(error, null);
        }

    }
}
