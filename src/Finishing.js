import { Link } from "react-router-dom";
import BackNext from "./BackNext";

const Finishing = ({ setCurrentPage, planName, planCost, addOn, addOnCost, monthPlan, currentPage, pages }) => {
    const totalAddon = addOnCost.reduce((i, j) => i + j, 0);
    const total = totalAddon + planCost;

    return (
        <main className='finishing'>
            <div>
                <h1 className="title">Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="summary">
                    <div className="main">
                        <div>
                            <p>{planName} {monthPlan ? "(monthly)" : "(yearly)"}</p>
                            <Link to="/Plans" onClick={() => setCurrentPage("/Plans")}>Change</Link>
                        </div>
                        <span>+${planCost}/{monthPlan ? "mo" : "yr"}</span>
                    </div>
                    <hr />
                    <div className="service">
                        <div>
                            {addOn.map((addon, key) => (
                                <p key={key}>{addon}</p>
                            )
                            )}
                        </div>
                        <div>
                            {addOnCost.map((cost, key) => (
                                <p key={key}>+${cost}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="total">
                    <p>Total {monthPlan ? "(per month)" : "(per year)"}</p> <span>+${total}/{monthPlan ? "mo" : "yr"}</span>
                </div>
            </div>
            <div className="footer">
                <BackNext {...{ currentPage, setCurrentPage, pages }} />
            </div>
        </main>
    )
}

export default Finishing