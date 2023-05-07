import { useEffect, useState } from "react";
import BackNext from "./BackNext";

const AddOns = ({ monthPlan, addons, setAddOn, setAddOnCost, style, currentPage, setCurrentPage, pages }) => {
    const [addName, setAddName] = useState([]);
    const [addCost, setAddCost] = useState([])
    const check = true

    const handleChange = (name, val) => {
        if (!addName.includes(name)) {
            setAddName([...addName, name])
            setAddCost([...addCost, val])
        } else {
            setAddName(addName.filter(item => !item.includes(name)))
            setAddCost(
                addCost.splice(0, addCost.indexOf(val)
                ).concat(
                    addCost.splice(addCost.indexOf(val) + 1, (addCost.length - 1))
                )
            )
        }
    }

    useEffect(() => {
        setAddOn(addName)
        setAddOnCost(addCost)
    }, [addCost, addName, setAddOnCost, setAddOn])

    return (
        <main className='addons'>
            <div>
                <h1 className="title">Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
                <div className="addonList">
                    {
                        Object.entries(addons).map((addon, key) => (
                            <label htmlFor={addon[0]}
                                key={key}
                                style={
                                    check && addName.includes(addon[0]) ? style : {}
                                }
                            >
                                <div className="addonItem">
                                    <input type="checkbox" name="online-service" id={addon[0]} onChange={() => handleChange(addon[0],
                                        monthPlan ? addon[1].monthly : addon[1].yearly
                                    )}
                                    />
                                    <div className="text">
                                        <p>{addon[0]}</p>
                                        <span>{addon[1].disc}</span>
                                    </div>
                                    <span className="cost" style={{ color: "hsl(243, 100%, 62%)" }}>
                                        {
                                            monthPlan ? `+$${addon[1].monthly}/mo` : `+$${addon[1].yearly}/yr`
                                        }
                                    </span>
                                </div>
                            </label>
                        ))
                    }

                </div>
            </div>
            <div className="footer">
                <BackNext {...{ currentPage, setCurrentPage, pages }} />
            </div>
        </main>
    )
}

export default AddOns