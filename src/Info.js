import { useNavigate } from "react-router-dom"

const Info = ({ name, setName, email, setEmail, phone, setPhone, setCurrentPage }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Plans")
        setCurrentPage("/Plans")
    }

    return (
        <main className='info'>
            <h1 className='title'>Personal info</h1>
            <p>Please provide your name, email address, and phone number</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={name} placeholder='e.g. Stephen King' required onChange={(e) => setName(e.target.value)} />
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' value={email} placeholder='e.g. stephenking@loren.com' required onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='phone'>Phone Number</label>
                <input type='text' id="phone" value={phone} placeholder='e.g. +1 234 567 890' required onChange={(e) => setPhone(e.target.value)} />
                <div className="footer">
                    <footer>
                        <div></div>
                        <button type="submit" className='next'>Next Step</button>
                    </footer>

                </div>
            </form>
        </main>
    )
}

export default Info