import styles from "./App.module.css"

import * as friends from "../../mocks/friends.json"
import * as stats from "../../mocks/statistical-data.json"
import * as transactions from "../../mocks/transactions.json"
import * as user from "../../mocks/user.json"

import FriendList from "../friendList/FriendList";
import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import TransactionHistory from "../transactionHistory/TransactionHistory";

const {name,tag,location,avatar,stats:stat}=user.default


function App() {
    return (
        <div className={styles.container}>
            <Profile
              name={name}
              tag={tag}
              location={location}
              avatar={avatar}
              stats={stat}
            />
            <Statistics title="UPLOAD STATS" stats={stats.default} />
            <FriendList friends={friends.default} />
            <TransactionHistory items={transactions.default}/>
        </div>
    )
}

export default App
