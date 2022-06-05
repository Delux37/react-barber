import BarberListItem from "./BarberListItem";

function BarberList() {
    return (
        <ul className="h-full flex gap-20 flex-wrap p-5 items-start">
            <BarberListItem firstName="george" lastName="deluxe" price="50" averageRate="5"/>           
        </ul>
    )
}

export default BarberList;