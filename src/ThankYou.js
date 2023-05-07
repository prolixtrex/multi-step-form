import { ReactComponent as IconThankYou } from "./assets/images/icon-thank-you.svg"
const ThankYou = () => {
    return (
        <main className="thankYou">
            <IconThankYou />
            <h1 className="title">Thank you!</h1>
            <p style={{ textAlign: "center" }}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </main>
    )
}

export default ThankYou