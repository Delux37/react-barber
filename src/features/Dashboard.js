import Toolbar from './shared/Toolbar'
import BarberList from './catalog/BarbersList';

function Dashboard() {
    return (
        <div className="flex flex-col h-screen w-screen	overflow-hidden">
            <Toolbar email={'testmail@test.com'}/>
    
            <BarberList />
        </div>
    )
}

export default Dashboard