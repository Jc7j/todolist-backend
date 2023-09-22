import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity('users')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  salt: string

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt)
    return hash === this.password
  }
}