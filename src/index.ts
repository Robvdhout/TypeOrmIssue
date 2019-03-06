import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {Repository} from "./entity/Repository";

createConnection().then(async connection => {

    const newRepo = new Repository();
    newRepo.name = 'test';
    newRepo.description = 'no contributions made';
    await connection.manager.save(newRepo);

    const RepoRepository = getRepository(Repository);
    const repos = await RepoRepository.find();

	console.log('repos', repos);
	console.log('contributions', repos[0].contributions);

    await connection.manager.save(repos);

    connection.close();

}).catch(error => console.log(error));
