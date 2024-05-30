import { importProductsFromMock } from "../../utils/importProducts"


export const Home = () => {
    return(
        <div>
            <h1>Bienvenidos a Black Sheep</h1>
            <button onClick={importProductsFromMock}>Agregar productos desde Mock</button>
        </div>
    )
}
