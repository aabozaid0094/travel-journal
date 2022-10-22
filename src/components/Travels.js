import Travel from "./Travel";
import TravelsData from "../data/TravelsData";

const Travels = ()=>{
    const TravelsElements = TravelsData.map((TravelData) => {
        return (
            <Travel
                key={`travel_${TravelData.id}`}
                {...TravelData}
            />
        );
    });
    return (
        <section className="travels">
            {TravelsElements}
        </section>
    );
}

export default Travels;