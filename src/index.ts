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

	/**
	repos [ Repository {
	    name: 'test',
	    description: 'no contributions made',
	    contributions: [ [Contribution] ] } ]
	*/
	console.log('repos', repos);
	
	/**
	contributions [ Contribution { count: null, user: null } ]
	*/
	console.log('contributions', repos[0].contributions);

    await connection.manager.save(repos);

    connection.close();

}).catch(error => console.log(error));
