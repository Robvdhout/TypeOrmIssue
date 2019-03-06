import {
	Entity,
	Column,
	PrimaryColumn,
	JoinTable,
	OneToMany
} from "typeorm";
import {Contribution} from "./Contribution";

@Entity()
export class Repository {

	@PrimaryColumn()
	name: string;

	@Column("text")
	description: string;

	@OneToMany(type => Contribution, contribution => contribution.repository, {eager: true, cascade: true})
	@JoinTable()
	contributions: Contribution[];
}