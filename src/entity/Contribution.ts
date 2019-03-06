import {Column, Entity, JoinTable, ManyToOne} from "typeorm";
import {Repository} from "./Repository";
import {User} from "./User";

@Entity()
export class Contribution{

	@ManyToOne(type => Repository, repository => repository.contributions, {primary: true})
	repository: Repository;

	@ManyToOne(type => User, user => user.contributions, {eager: true, cascade: true, primary: true})
	@JoinTable()
	user: User;

	@Column()
	count: number;
}