function BarberListItem({ firstName, lastName, price, averageRate }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-auto bg-slate-100 cursor-pointer transition duration-300 hover:bg-slate-200 active:bg-slate-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Barber</div>
        <p className="text-gray-700 text-base">
            First name: { firstName },
        </p>
        <p className="text-gray-700 text-base">
            Last name: { lastName }
        </p>
        <p className="text-gray-700 text-base">
            Average-rate: { averageRate }
        </p>
        <p className="text-gray-700 text-base">
            Price: { price }$
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #junior-barber
        </span>
      </div>
    </div>
  );
}

export default BarberListItem;
