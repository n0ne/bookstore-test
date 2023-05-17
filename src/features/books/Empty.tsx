import { Card } from "react-bootstrap"

function Empty() {

    return (
        <div 
            className="d-flex justify-content-center" 
            style={{
                fontSize: '31px',
                marginTop: '50px',
                color: 'darkgrey'
            }}>
            No books added at the moment
        </div>
    )
}

export default Empty