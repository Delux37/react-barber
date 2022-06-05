import Toolbar from './shared/Toolbar'
import BarberList from './catalog/BarbersList';

function Dashboard({email, signOut}) {
    return (
        <div className="flex flex-col h-screen w-screen	overflow-hidden">
            <Toolbar email={email} signOut={signOut}/>
    
            <BarberList />
        </div>
    )
}

export default Dashboard