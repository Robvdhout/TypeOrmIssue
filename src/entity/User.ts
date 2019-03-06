import {Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Contribution} from "./Contribution";

@Entity()
export class User{

	@PrimaryColumn()
	github: string;

	@OneToMany(type => Contribution, contribution => contribution.user)
	contributions: Contribution[];
}