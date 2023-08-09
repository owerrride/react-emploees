import './emploees-list.css'
import EmploeesListItem from "../emploees-list-item/emploees-list-item"

const EmploeesList = ({data}) => {

    const elements = data.map(item => {
        return (
        <EmploeesListItem name={item.name} salary={item.salary} increase={item.increase} />
        )
    });
    
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploeesList;