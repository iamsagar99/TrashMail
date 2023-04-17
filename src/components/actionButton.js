import { NavLink } from "react-router-dom";

const ActionButtons = ({ id, updatePath}) => {
    
    return (<>
        {
            updatePath && 
            <NavLink to={updatePath} className="btn btn-sm btn-info rounded-circle me-2">
            <span>=</span>
        </NavLink>
        }
        
    </>)
}
export default ActionButtons;