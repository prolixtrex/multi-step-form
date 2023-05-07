import { useState } from "react";
import BackNext from "./BackNext";

const Plans = ({ monthPlan, setMonthPlan, planName, setPlanName, setPlanCost, plans, check, setCheck, style, setStyle, currentPage, setCurrentPage, pages }) => {
    const [warning, setWarning] = useState("");

    const handleClick = (name, cost) => {
        setPlanName(name);
        setPlanCost(cost);
        setStyle({
            'backgroundColor': "hsla(228, 100%, 84%, 0.1)",
            'border': "2px solid hsl(231, 11%, 63%)",
        })
    }

    const handleChange = () => {
        setMonthPlan((prev) => !prev);
        setCheck((prev) => !prev);
        setPlanName("");
        setPlanCost("");
    }


    return (
        <main className="plans">
            <div>
                <h1 className="title">Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
                <div className="plan">
                    {
                        Object.entries(plans).map((plan, key) => (
                            <div className="planType"
                                key={key}
                                style={
                                    planName === plan[0] ? style : {}
                                }
                                onClick={() => handleClick((plan[0]),
                                    monthPlan ? (plan[1].monthly) : (plan[1].yearly)
                                )}
                            >
                                <div>
                                    {plan[1].icon}
                                </div>
                                <div>
                                    <p className="plan-name">{plan[0]}</p>
                                    {
                                        monthPlan ?
                                            (<span>${plan[1].monthly}/mo</span>) :
                                            (
                                                <>
                                                    <span>${plan[1].yearly}/yr</span>
                                                    <p>2 months free</p>
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                        ))

                    }
                </div>
                <div className="setPlan">
                    <p style={{ fontWeight: (monthPlan && "bold") }}>Monthly</p>
                    <label className="switch">
                        <input type="checkbox" onChange={handleChange} checked={check} />
                        <span className="slider"></span>
                    </label>
                    <p style={{ fontWeight: (!monthPlan && "bold") }}>Yearly</p>
                </div>
                <div style={{ textAlign: "center", color: "hsl(354, 84%, 57%)", margin: "10px" }}>{warning}</div>
            </div>
            <div className="footer">
                <BackNext {...{ currentPage, setCurrentPage, pages, setWarning, planName }} />
            </div>
        </main>
    )
}

export default Plans