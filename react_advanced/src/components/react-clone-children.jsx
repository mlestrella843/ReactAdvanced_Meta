
const Row = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

function LiveOrders(){
    return(
        <div>
            <Row>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>305</p>
                <p>10:35</p>
                <p>John</p>
            </Row>
        </div>
    );
}
export {LiveOrders};