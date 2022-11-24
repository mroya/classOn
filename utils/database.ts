import { Db, MongoClient } from "mongodb";

interface ConnectType {
    db: Db;
    client: MongoClient;
}

const client = new MongoClient(process.env.DATABASE_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function connect(): Promise<ConnectType> {
    if (!client.isConnected) await client.connect();

    const db = client.db('users');
    return { db, client };
}
