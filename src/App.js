import './app.css';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmploeesList from './components/emploees-list/emploees-list';
import EmploeesAddForm from './components/emploees-add-form/emploees-add-form';

const data = [
    {name: "Евгений", salary: "1000", increase: true},
    {name: "Дмитрий", salary: "2000", increase: false},
    {name: "Григорий", salary: "3000", increase: false},
    {name: "Юра", salary: "4000", increase: false},
];

console.log(data[0].name);

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/> 
                <AppFilter/>
                <EmploeesList data={data}/>
            </div>
            <EmploeesAddForm/>
        </div>
    )
}

export default App;