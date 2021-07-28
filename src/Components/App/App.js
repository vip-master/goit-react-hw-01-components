import styles from "./App.module.css"

import * as friends from "../../mocks/friends.json"
import * as stats from "../../mocks/statistical-data.json"
import * as transactions from "../../mocks/transactions.json"
import * as user from "../../mocks/user.json"

import FriendList from "../friendList/FriendList";
import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import TransactionHistory from "../transactionHistory/TransactionHistory";

function App() {
    return (
        <div className={styles.container}>
            <Profile
              name={user.default.name}
              tag={user.default.tag}
              location={user.default.location}
              avatar={user.default.avatar}
              stats={user.default.stats}
            />
            <Statistics title="UPLOAD STATS" stats={stats.default} />
            <FriendList friends={friends.default} />
            <TransactionHistory items={transactions.default}/>
        </div>
    )
}

export default App
