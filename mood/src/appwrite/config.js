import conf from '../conf.js';
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{ 
  client = new Client();
  Databases;
  bucket;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId);  
    this.databases = new this.Databases(this.client);
    this.bucket = new this.Storage(this.client);
  }
}


const service = new Service();
export default service;
