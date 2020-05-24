import Queries from "@shopify-api/db/Queries"
import Inserts from "@shopify-api/db/Inserts"
import Deletes from "@shopify-api/db/Deletes"
import Updates from "@shopify-api/db/Updates"

const getQueries = () => new Queries()
const getInserts = () => new Inserts()
const getDeletes = () => new Deletes()
const getUpdates = () => new Updates()

export default {
    getQueries,
    getDeletes,
    getInserts,
    getUpdates
}