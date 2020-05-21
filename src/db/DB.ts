import Queries from "./Queries"
import Inserts from "./Inserts"
import Deletes from "./Deletes"
import Updates from "./Updates"

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