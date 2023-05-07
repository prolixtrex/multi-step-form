import Aside from "./Aside"
import Info from "./Info"
import Plans from "./Plans"
import AddOns from "./AddOns"
import Finishing from "./Finishing"
import ThankYou from "./ThankYou"
import Missing from "./Missing"
import { Route, Routes, useLocation } from "react-router-dom"
import { useState } from "react"
import { ReactComponent as IconArcade } from "./assets/images/icon-arcade.svg"
import { ReactComponent as IconAdvanced } from "./assets/images/icon-advanced.svg"
import { ReactComponent as IconPro } from "./assets/images/icon-pro.svg"

function App() {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState(location.pathname);
    const pages = ["/", "/Plans", "/AddOns", "/Finishing", "/ThankYou"];
    const [monthPlan, setMonthPlan] = useState(true);
    const [planName, setPlanName] = useState("");
    const [planCost, setPlanCost] = useState();
    const [addOn, setAddOn] = useState([]);
    const [addOnCost, setAddOnCost] = useState([]);
    const [check, setCheck] = useState(false)
    const [style, setStyle] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()

    const plans = {
        Arcade: {
            icon: <IconArcade />,
            monthly: 9,
            yearly: 90
        },
        Advanced: {
            icon: <IconAdvanced />,
            monthly: 12,
            yearly: 120
        },
        Pro: {
            icon: <IconPro />,
            monthly: 15,
            yearly: 150
        }
    }

    const addons = {
        "Online service": {
            disc: "Access to multiplayer games",
            monthly: 1,
            yearly: 10
        },
        "Larger storage": {
            disc: "Extra 1TB of cloud save",
            monthly: 2,
            yearly: 20
        },
        "Customizable profile": {
            disc: "Custom theme on your profile",
            monthly: 2,
            yearly: 20
        },
    }


    return (
        <div className="App">
            <Aside {...{ pages, currentPage }} />
            <Routes>
                <Route path="/" element={<Info {...{
                    currentPage, name, setName,
                    email, setEmail,
                    phone, setPhone, setCurrentPage, pages
                }} />} />
                <Route path="/plans" element={<Plans {...{ monthPlan, setMonthPlan, setPlanCost, planName, setPlanName, plans, check, setCheck, style, setStyle, currentPage, setCurrentPage, pages }} />} />
                <Route path="/addons" element={<AddOns {...{ monthPlan, setAddOn, setAddOnCost, addons, style, currentPage, setCurrentPage, pages }} />} />
                <Route path="/finishing" element={<Finishing {...{ setCurrentPage, planName, planCost, addOn, addOnCost, monthPlan, currentPage, pages }} />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="*" element={<Missing />} />
            </Routes>
        </div>
    );
}

export default App;
