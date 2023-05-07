import AsideItems from './AsideItems';

const Aside = ({ pages, currentPage }) => {

    const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

    return (
        <aside>
            {
                steps.map((step, key) => <AsideItems
                    key={key}
                    id={Number(key)}
                    {...{ step, pages, currentPage }}
                />)
            }
        </aside>
    )
}

export default Aside