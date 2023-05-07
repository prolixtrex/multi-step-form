import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BackNext = ({ currentPage, setCurrentPage, pages, planName, setWarning }) => {

    const navigate = useNavigate();
    const [hideFooter, setHideFooter] = useState()
    const [hideBackButton, setHideBackButton] = useState("visible");
    const [buttonText, setButtonText] = useState("Next Step")




    useEffect(() => {
        if (currentPage === "/") {
            setHideBackButton("hidden")
        } else {
            setHideBackButton("visible")
        }

        if (currentPage === "/Finishing") {
            setButtonText("Confirm")
        } else {
            setButtonText("Next Step")
        }

        if (currentPage === "/ThankYou") {
            setHideFooter("none")
        } else {
            setHideFooter("")
        }
    }, [currentPage])

    const handleNext = () => {
        const nextPage = pages[(pages.indexOf(currentPage) + 1)]
        if (currentPage === "/Plans" && planName === "") {
            setWarning("Please select a plan to continue!")
        } else {
            navigate(nextPage)
            setCurrentPage(nextPage)
            setWarning("")
        }
    }

    const handlePrev = () => {
        const prevPage = pages[(pages.indexOf(currentPage) - 1)]
        navigate(prevPage)
        setCurrentPage(prevPage)
    }

    return (
        <footer style={{ display: hideFooter }}>
            <button className='back' onClick={handlePrev} style={{ visibility: hideBackButton }}>Go Back</button>
            <button className='next' onClick={handleNext}>{buttonText}</button>
        </footer>
    )
}

export default BackNext