import { Layout } from '../../components/Layout/Layout.jsx'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'

export const Home = () => {

    const itemListContainerProps = {
        greeting: "Welcome to Black Sheep",
        bgGrey: true
      }

    return(
        <Layout>
            <ItemListContainer {...itemListContainerProps}/>
        </Layout>
    )
}
