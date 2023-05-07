import { useEffect, useState } from 'react'

const AsideItems = ({ step, id, pages, currentPage }) => {
    const [color, setColor] = useState();

    useEffect(() => {
        if ((pages.indexOf(currentPage)) === id) {
            setColor({
                backgroundColor: "hsl(206, 94%, 87%)",
                color: "hsl(243, 100%, 62%)"
            })
        } else {
            setColor()
        }
    }, [currentPage, setColor, id, pages])

    return (
        <div className='tracker'>
            <div className='circle' style={color}>{id + 1}</div>
            <div>
                <p className='step'>STEP {id + 1}</p>
                <p>{step}</p>
            </div>
        </div>
    )
}

export default AsideItems