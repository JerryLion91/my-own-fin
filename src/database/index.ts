import mongoose from 'mongoose';

class Database {
  mongoConnection: typeof mongoose;
  connectedToMongoDB: boolean;
  private databaseUrl: string;

  constructor() {
    const { DB_USER, DB_PASS, DB_CLUS, DB_DATA } = process.env;
    this.databaseUrl = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUS}.qucph.mongodb.net/${DB_DATA}?retryWrites=true&w=majority`;
    this.mongoConnection = mongoose;
  }

  init() {
    this.mongo();
  }

  private mongo() {
    this.mongoConnection.connect(
      this.databaseUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err: any) => {
        if (err) {
          this.connectedToMongoDB = false;
          console.error(`Erro na conexão ao MongoDB - ${err}`);
        }
      }
    );
    this.mongoConnection.connection.once('open', () => {
      this.connectedToMongoDB = true;
      console.log('Connected with MongoDB');
    });
  }
}

export default new Database();
