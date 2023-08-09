import './app.css';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmploeesList from './components/emploees-list/emploees-list';
import EmploeesAddForm from './components/emploees-add-form/emploees-add-form';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/> 
                <AppFilter/>
                <EmploeesList/>
            </div>
            <EmploeesAddForm/>
        </div>
    )
}

export default App;