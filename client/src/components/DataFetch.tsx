
type propsStatus = {
    status: 'succes' | 'error' | 'loading'
}

const DataFetch = ({ status }: propsStatus) => {

    if (status === 'succes') {
        console.log('data fetch succesfully')
    } else if (status === 'error') {
        console.log('data fetch unseccfully')
    }
    return (
        <div>
            <h1>data succesfully </h1>
        </div>
    )
}

export default DataFetch
