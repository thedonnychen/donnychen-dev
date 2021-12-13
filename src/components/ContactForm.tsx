import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

export const ContactForm = () => {
    const [inputs, setInputs] = useState({});

    const [messageClass, setMessageClass] = useState('opacity-0');
    const [inputDisable, setInputDisable] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const handleChange = (event: React.SyntheticEvent) => {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        emailjs.sendForm((process.env.REACT_APP_EMAILJS_SERVICE_ID as string), (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string), (form.current as HTMLFormElement), (process.env.REACT_APP_EMAILJS_USER_ID as string))
            .then((result: { text: any; }) => {
                console.log(result.text);
                setMessageClass('opacity-100');
                setInputDisable(true);
            }, (error: { text: any; }) => {
                console.log(error.text);
            });
    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    value={(inputs as any).name || ''}
                    onChange={handleChange}
                    disabled={inputDisable}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    value={(inputs as any).email || ''}
                    onChange={handleChange}
                    disabled={inputDisable}
                />
            </div>
            <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                    name="message"
                    className="form-control form-control-lg"
                    value={(inputs as any).message || ''}
                    onChange={handleChange}
                    disabled={inputDisable}
                />
            </div>
            <input type="submit" className="btn btn-lg btn-primary mb-5" disabled={inputDisable} />
            <p className={"text-center lead " + messageClass}>Thank you for your message! I'll try to get back to you ASAP.</p>
        </form>
    )
}
