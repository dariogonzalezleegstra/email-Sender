
const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    emails = emails.replace(/,\s*$/, '');
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => regularExpression.test(email) === false);

    if (invalidEmails.length) {
        return `The following mails are invalids ${invalidEmails}`
    }

    return null;
}